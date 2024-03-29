<?php

namespace App\Http\Middleware;

use Closure;

use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Http\Request;

use App\Http\Utils\StandardResponse;
use App\Models\Account as AccountModel;

use \Exception;

class Authenticate
{
    /**
     * The authentication guard factory instance.
     *
     * @var \Illuminate\Contracts\Auth\Factory
     */
    protected $auth;
    protected $account;

    /**
     * Create a new middleware instance.
     *
     * @param  \Illuminate\Contracts\Auth\Factory  $auth
     * @return void
     */
    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
        $this->account = new AccountModel();
    }

    private function genToken($id)
    {
        $secret_key = "YOUR_SECRET_KEY";
        $issuer_claim = "http://pabcdcba.com";
        $audience_claim = "http://pabcdcba.com";
        $issuedat_claim = time(); // issued at
        $expire_claim = $issuedat_claim + 600;
        $payload = array(
            "iss" => $issuer_claim,
            "aud" => $audience_claim,
            "iat" => $issuedat_claim,
            "exp" => $expire_claim,
            "data" => array(
                "id" => $id,
            )
        );
        $jwt = JWT::encode($payload, $secret_key, 'HS256');
        return $jwt;
    }

    public function checkToken($request)
    {
        $jwtToken = $request->header('jwtToken');
        $secret_key = "YOUR_SECRET_KEY";
        try {
            $payload = JWT::decode($jwtToken, new Key($secret_key, 'HS256'));
            return true;
        } catch (Exception $e) {
            // echo $e->getMessage();
            return false;
        }
    }



    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle(Request $request, Closure $next, $guard = null)
    {
        // if ($this->auth->guard($guard)->guest()) {
        //     return response('Unauthorized.', 401);
        // }
        // return $next($request);
        switch ($request->path()) {
            case 'login':
                $account = $request->input("account");
                $password = $request->input("password");
                //查詢DB驗證帳密的正確性
                $dbRes = $this->account->getAccount($account);
                if (count($dbRes) > 0) {
                    $data = $dbRes[0];
                    if ($account == $data->account && $password == $data->PassWord) {
                        $token = $this->genToken($account);
                        return response($token, 200);
                    } else if ($password != $data->PassWord) {
                        return response("密碼錯誤", 203);
                    }
                } else {
                    return response("找不到使用者", 404);
                }
                return response("找不到帳號", 200);
                break;
            case 'register':
                $account = $request->input("account");
                $password = $request->input("password");
                $name = $request->input("name");
                $res = $this->account->register($account, $password, $name);
                return response($res['message'], 200);
                break;
            default:
                if ($this->checkToken($request)) {
                    return $next($request);
                }
                return response('尚未登入', 401);
                break;
        }
    }
}
