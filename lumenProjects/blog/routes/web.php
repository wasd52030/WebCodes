<?php

/** @var \Laravel\Lumen\Routing\Router $router */

use illuminate\Http\Response;

use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeEmail;

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

$router->get('/hello', function () {
    return "Hello world!";
});

$name = "John";
$router->get('/hellosomeone', function () use ($name) {
    return "Hello $name";
});

$router->get('/ControllerSample', "ControllerSample@helloController");

$router->get('/ControllerSample/{name}', "ControllerSample@hello");
$router->get('/ControllerSample/{a}/{b}', "ControllerSample@add");

$router->post('/register', ['middleware' => ['auth'], function () {
    return '註冊成功';
}]);

$router->post('/login', ['middleware' => ['auth'], function () {
    return '登入成功';
}]);

$router->get('/user', "User@getAllUsers");
$router->get('/user/{id}', "User@getUser");


$router->post('/user', [
    'middleware' => ['auth', 'role'],
    'uses' => "User@addUser"
]);
$router->put('/user/{id}', [
    'middleware' => ['auth', 'role'],
    'uses' => "User@updateUser"
]);
$router->delete('/user/{id}', [
    'middleware' => ['auth', 'role'],
    'uses' => "User@deleteUser"
]);


$router->get('mailtest/{email}',function (string $email){
    try {
        Mail::to($email)->send(new WelcomeEmail($email,"Jack"));
        return "send Success";
    }catch (Exception $e){
        return $e;
    }
});
