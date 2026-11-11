<?php
/**
 * CV request form handler (/request-cv/). Emails the request to Rob; stores nothing.
 * Needs PHP 7.4+ with mail() on the host. Edit TO/FROM if the addresses change.
 */
declare(strict_types=1);

const TO = 'hello@robertwood.me';
const FROM = 'website@robertwood.me'; // Must be an address on this domain, or mail may be rejected as spam.

function redirect(string $to): void
{
    header('Location: ' . $to, true, 303);
    exit;
}

/** Returns an error message, or null if the request is valid. */
function validate(array $in): ?string
{
    $name = trim((string) ($in['name'] ?? ''));
    $email = trim((string) ($in['email'] ?? ''));
    if ($name === '' || strlen($name) > 100) return 'name';
    if (strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) return 'email';
    // Line breaks in header values would let someone add their own mail headers.
    if (preg_match('/[\r\n]/', $name . $email)) return 'header';
    if (strlen(trim((string) ($in['company'] ?? ''))) > 150) return 'company';
    if (strlen(trim((string) ($in['message'] ?? ''))) > 2000) return 'message';
    return null;
}

// Allows `php request-cv.php` to load validate() for the self-check without sending anything.
if (PHP_SAPI === 'cli') return;

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    exit;
}

// Bots fill in the hidden "website" field; pretend it worked.
if (trim((string) ($_POST['website'] ?? '')) !== '') redirect('/request-cv/sent/');

if (validate($_POST) !== null) redirect('/request-cv/#error');

$name = trim($_POST['name']);
$email = trim($_POST['email']);
$company = trim((string) ($_POST['company'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));

$body = "CV request from robertwood.me\n\n"
    . "Name: $name\n"
    . "Email: $email\n"
    . 'Company: ' . ($company !== '' ? $company : '-') . "\n\n"
    . "Message:\n" . ($message !== '' ? $message : '-') . "\n";

$headers = [
    'From' => 'robertwood.me <' . FROM . '>',
    'Reply-To' => $email,
    'Content-Type' => 'text/plain; charset=UTF-8',
];

redirect(mail(TO, 'CV request from robertwood.me', $body, $headers) ? '/request-cv/sent/' : '/request-cv/#error');
