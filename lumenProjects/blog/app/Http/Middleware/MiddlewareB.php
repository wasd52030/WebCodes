<?php

namespace App\Http\Middleware;

use Closure;

class MiddlewareB
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next,$args)
    {
        echo "MiddleWare B！\n";
        echo "Args: $args\n";
        return $next($request);
    }
}
