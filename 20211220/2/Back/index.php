<?php

require "Vendor/autoload.php";

use \Firebase\JWT\JWT;

$id = $_POST["id"];
$password = $_POST["password"];
$secret_key = "cccc"; // YOUR_SECRET_KEY
$issuer_claim = "http://localhost";
$audience_claim = "http://localhost";
$issuedat_claim = time(); // issued at
$expire_claim = $issuedat_claim + 60;
$payload = array(
    "iss" => $issuer_claim,
    "aud" => $audience_claim,
    "iat" => $issuedat_claim,
    "exp" => $expire_claim,
    "data" => array(
        "id" => $id,
    )
);
$jwt = JWT::encode($payload, $secret_key);
//標準化輸出
echo $jwt;
