<?php
// Self-check for the CV request validation: php tests/php/request-cv.test.php
require __DIR__ . '/../../public/request-cv.php';

$ok = ['name' => 'Ada Lovelace', 'email' => 'ada@example.com', 'company' => 'Analytical Ltd', 'message' => 'Hi'];
$cases = [
    [$ok, null],
    [['name' => 'Ada', 'email' => 'ada@example.com'], null],
    [array_merge($ok, ['name' => '  ']), 'name'],
    [array_merge($ok, ['name' => str_repeat('a', 101)]), 'name'],
    [array_merge($ok, ['email' => 'not-an-email']), 'email'],
    [array_merge($ok, ['email' => "ada@example.com\r\nBcc: spam@example.com"]), 'email'],
    [array_merge($ok, ['name' => "Ada\nBcc: spam@example.com"]), 'header'],
    [array_merge($ok, ['company' => str_repeat('a', 151)]), 'company'],
    [array_merge($ok, ['message' => str_repeat('a', 2001)]), 'message'],
];
foreach ($cases as $i => [$input, $expected]) {
    $got = validate($input);
    assert($got === $expected, "case $i: expected " . var_export($expected, true) . ', got ' . var_export($got, true));
}
echo "request-cv validation: " . count($cases) . " cases passed\n";
