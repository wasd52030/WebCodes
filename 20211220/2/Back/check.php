<?php
require "Vendor/autoload.php";

use \Firebase\JWT\JWT;

$haders = getallheaders();
$jwt = $haders["Authorization"];
$secret_key = "cccc"; // YOUR_SECRET_KEY

try {
    $decode = JWT::decode($jwt, $secret_key, array('HS256'));
    echo "Access granted\n"; //標準化輸出
} catch (Exception $e) {
    echo "Access denied\n";
    echo $e->getMessage();
}
