<?php
/**
 * Site-wide configuration. Edit these values for your Hostinger deployment.
 * This file is included by every entry point — it must never be requested directly.
 */
if (!defined('DA_APP')) {
    http_response_code(403);
    exit('Forbidden');
}

return [
    'site_name'  => 'Design Asylum',
    'site_title' => 'Design Asylum — Bold by design',
    'site_url'   => 'https://designasylum.in',

    // Public contact details, also injected into the front end as window.SITE_CONFIG.
    'contact_email' => 'hello@designasylum.in',
    'contact_phone' => '+91 85478 07934',
    'contact_phone_href' => '+918547807934',
    'studio_location' => 'Bengaluru, India',

    // Where contact-form submissions are delivered.
    'recipient_email' => 'hello@designasylum.in',

    // Optional SMTP relay (e.g. Hostinger's smtp.hostinger.com). Leave smtp_host
    // empty to send with PHP's built-in mail() instead.
    'smtp_host' => '',
    'smtp_port' => 587,
    'smtp_user' => '',
    'smtp_pass' => '',
    'smtp_secure' => 'tls', // 'tls' or 'ssl'

    // Basic abuse protection for /api/contact.php
    'rate_limit_seconds' => 30, // minimum seconds between submissions per IP
];
