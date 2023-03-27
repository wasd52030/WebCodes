<?php

/** @var \Laravel\Lumen\Routing\Router $router */
use illuminate\Http\Response;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/a', function () use ($router) {
    return response()
        ->json(['result' => 345, 'message' => 'aaa']);
});
