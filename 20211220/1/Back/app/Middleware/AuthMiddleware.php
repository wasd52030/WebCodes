<?php

namespace app\Middleware;

use app\Models\Account;
use \Exception;
use vendor\JWT\JWT;


class AuthMiddleware
{
    public static function checkToken()
    {
        $headers = getallheaders();
        $jwt = $headers['Authorization'];

        $secret_key = "cccc"; //YOUR_SECRET_KEY
        try {
            $payload = JWT::decode($jwt, $secret_key, array('HS256'));
            $jwt = self::genToken($payload->data->id);
            $response['status'] = 200;
            $response['message'] = "Access granted";
            $response['token'] = $jwt;
        } catch (Exception $e) {
            $response['status'] = 403;
            $response['message'] = $e->getMessage();
        }
        return $response;
    }

    public static function Login()
    {
        $id = $_POST['id'];
        $password = $_POST['password'];

        //查詢DB驗證帳密的正確性
        $account = new Account();
        $auth = $account->Authorization($id, $password);

        if (count($auth['result']) != 0) {
            $jwt = self::genToken($id);
            $response['status'] = 200;
            $response['message'] = "Access granted";
            $response['token'] = $jwt;
        } else {
            $response['status'] = 204;
            $response['message'] = "Access failed";
            $response['token'] = '';
        }

        // $jwt = self::genToken($id);
        // $response['status'] = 200;
        // $response['message'] = "Access granted";
        // $response['token'] = $jwt;

        return $response;
    }

    private static function genToken($id)
    {
        $secret_key = "cccc"; //YOUR_SECRET_KEY
        $issuer_claim = "http://localhost";
        $audience_claim = "http://localhost";
        $issuedat_claim = time(); // issued at
        $expire_claim = $issuedat_claim + 86400;
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
        return $jwt;
    }
}
