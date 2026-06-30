# Deploying to Hostinger

This is a PHP site: `index.php` renders the page shell and injects site
config server-side; the page itself is still a build-less React app
(loaded from CDN via Babel Standalone) for the visual layer, with a real
PHP backend for the contact form.

## File layout

```
index.php              entry point — sets page title, includes header/footer
includes/
  config.php            site settings: contact email, phone, SMTP, rate limit
  header.php             <head>, design-system assets, injects window.SITE_CONFIG
  footer.php             loads the React section scripts, closes the page
  .htaccess               blocks direct HTTP access to this folder
api/
  contact.php            POST endpoint the homepage contact form submits to
da/                       React section components (homepage)
_ds/                      Design Asylum design-system bundle (CSS, tokens, JS)
.htaccess                 sets index.php as the default document
```

## Steps

1. **Edit `includes/config.php`** before upload:
   - `recipient_email` — where contact-form leads should land
   - `contact_email` / `contact_phone` — shown across the page and footer
   - Leave `smtp_host` empty to use PHP's built-in `mail()`. For reliable
     delivery (recommended — shared-hosting `mail()` often lands in spam),
     set `smtp_host` to `smtp.hostinger.com`, `smtp_port` to `587`, and fill
     in `smtp_user` / `smtp_pass` with a Hostinger email account's
     credentials, then install PHPMailer:
     ```
     composer require phpmailer/phpmailer
     ```
     and upload the resulting `vendor/` folder alongside the rest of the
     site. `api/contact.php` automatically uses PHPMailer/SMTP when
     `vendor/autoload.php` is present and `smtp_host` is set; otherwise it
     falls back to `mail()`.

2. **Upload** the whole project folder to `public_html` (via Hostinger's
   File Manager or FTP/SFTP). Keep the folder structure intact.

3. In hPanel, set the **PHP version** to 8.1+ under
   *Advanced → PHP Configuration*.

4. Visit your domain — `index.php` is served automatically as the default
   document (`.htaccess` sets `DirectoryIndex index.php`).

5. Test the contact form at the bottom of the homepage. A submission with
   working SMTP/`mail()` config should arrive at `recipient_email` within
   a minute; check hPanel's email logs if it doesn't.

## Notes

- `includes/` is blocked from direct HTTP access (`includes/.htaccess`) and
  every file in it also self-guards with a `DA_APP` constant check, so even
  a misconfigured server can't leak `config.php` contents.
- The contact endpoint has a simple per-IP rate limit (`rate_limit_seconds`
  in `config.php`) and a honeypot field — no CAPTCHA dependency.
