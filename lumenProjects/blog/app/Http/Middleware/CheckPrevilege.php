<?php

namespace App\Http\Middleware;

use Closure;


class CheckPrevilege
{
    public function handle($request, Closure $next)
    {
        $role = $request->header('role');
        $isAuthorized = ($role == "admin") ? true : false;
        if ($isAuthorized) {
            return $next($request);
        } else {
            return response('權限不足', 401);
        }
    }
}
