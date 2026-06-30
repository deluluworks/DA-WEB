<?php
/**
 * Contact form endpoint for the homepage "Let's talk about your brand" section.
 * Accepts a JSON POST body and emails it to the studio inbox.
 */
define('DA_APP', true);
header('Content-Type: application/json; charset=utf-8');

$config = require __DIR__ . '/../includes/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// --- basic per-IP rate limit (file-based, no DB required on shared hosting) ---
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$throttleFile = sys_get_temp_dir() . '/da_contact_' . md5($ip) . '.lock';
if (file_exists($throttleFile) && (time() - filemtime($throttleFile)) < $config['rate_limit_seconds']) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Please wait a moment before sending another message.']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST; // fall back to a normal form post
}

$name    = trim((string)($data['name'] ?? ''));
$email   = trim((string)($data['email'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$slot    = trim((string)($data['slot'] ?? ''));
$honeypot = trim((string)($data['website'] ?? '')); // hidden field — bots fill it, humans don't

if ($honeypot !== '') {
    // Silently pretend success so bots don't learn anything.
    echo json_encode(['success' => true]);
    exit;
}

$errors = [];
if ($name === '' || mb_strlen($name) > 120) {
    $errors[] = 'Please enter your name.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please enter a valid email address.';
}
if ($message === '' || mb_strlen($message) > 4000) {
    $errors[] = 'Please tell us a little about what you\'re building.';
}

if ($errors) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
    exit;
}

// Strip anything that could be used for header injection.
$sanitize = static fn($v) => preg_replace('/[\r\n]+/', ' ', $v);
$name = $sanitize($name);
$email = $sanitize($email);
$slot = $sanitize($slot);

$subject = 'New enquiry from designasylum.in — ' . $name;
$body = "Name: {$name}\n"
      . "Email: {$email}\n"
      . ($slot !== '' ? "Preferred slot: {$slot}\n" : '')
      . "\nMessage:\n{$message}\n";

$sent = send_contact_email($config, $subject, $body, $name, $email);

if ($sent) {
    @touch($throttleFile);
    echo json_encode(['success' => true, 'message' => 'Thanks — we\'ll reply within a day.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Something went wrong sending your message. Please email us directly instead.']);
}

/**
 * Sends via SMTP (PHPMailer, if installed and configured) or falls back to mail().
 */
function send_contact_email(array $config, string $subject, string $body, string $replyName, string $replyEmail): bool
{
    $vendorAutoload = __DIR__ . '/../vendor/autoload.php';
    if ($config['smtp_host'] !== '' && file_exists($vendorAutoload)) {
        require_once $vendorAutoload;
        if (class_exists(\PHPMailer\PHPMailer\PHPMailer::class)) {
            try {
                $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
                $mail->isSMTP();
                $mail->Host       = $config['smtp_host'];
                $mail->Port       = $config['smtp_port'];
                $mail->SMTPAuth   = true;
                $mail->Username   = $config['smtp_user'];
                $mail->Password   = $config['smtp_pass'];
                $mail->SMTPSecure = $config['smtp_secure'];
                $mail->setFrom($config['smtp_user'], $config['site_name']);
                $mail->addAddress($config['recipient_email']);
                $mail->addReplyTo($replyEmail, $replyName);
                $mail->Subject = $subject;
                $mail->Body    = $body;
                $mail->send();
                return true;
            } catch (\Throwable $e) {
                error_log('Contact form SMTP error: ' . $e->getMessage());
                return false;
            }
        }
    }

    $headers = "From: {$config['site_name']} <{$config['recipient_email']}>\r\n"
             . "Reply-To: {$replyEmail}\r\n";
    return @mail($config['recipient_email'], $subject, $body, $headers);
}
