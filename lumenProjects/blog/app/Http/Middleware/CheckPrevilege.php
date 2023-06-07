<?php

namespace App\Http\Middleware;

use Closure;
use Exception;

use Illuminate\Http\Request;

use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;


class CheckPrevilege
{

    function __construct()
    {
    }

    public function checkToken($token)
    {
        $secret_key = "YOUR_SECRET_KEY";
        try {
            $payload = JWT::decode($token, new Key($secret_key, 'HS256'));
            return true;
        } catch (Exception $e) {
            // echo $e->getMessage();
            return false;
        }
    }

    public function handle(Request $request, Closure $next)
    {
        $token = $request->header('jwtToken');
        $check = $this->checkToken($token);

        $role = $request->header('role');
        $isAuthorized = ($role == "admin") ? true : false;
        if ($isAuthorized) {
            return $next($request);
        } else {
            return response('權限不足', 401);
        }
    }
}
