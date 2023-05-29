<?php

namespace App\Http\Middleware;

use Closure;

class MiddlewareA
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
        echo "MiddleWare A！\n";
        echo "Args: $args\n";
        return $next($request);
    }
}
