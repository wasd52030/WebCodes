<?php
require_once "./Router.php";

if (isset($_GET['action'])) {
    $action = $_GET['action'];
} else {
    $action = "_no_action";
}

$router = new Router();
$router->register('getUsers', 'Employee', 'getUsers');
$router->register('newUser', 'Employee', 'newUser');
$router->register('removeUser', 'Employee', 'removeUser');
$router->register('updateUser', 'Employee', 'updateUser');

$response = $router->run($action);
echo json_encode($response);
