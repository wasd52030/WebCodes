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

$router->register('getProducts', 'Product', 'getProducts');
$router->register('newProduct', 'Product', 'newProduct');
$router->register('removeProduct', 'Product', 'removeProduct');
$router->register('updateProduct', 'Product', 'updateProduct');

$router->register('getCharacters', 'Character', 'getCharacters');
$router->register('newCharacter', 'Character', 'newCharacter');
$router->register('removeCharacter', 'Character', 'removeCharacter');
$router->register('updateCharacter', 'Character', 'updateCharacter');

$router->register('getSuppliers', 'Supplier', 'getSuppliers');
$router->register('newSupplier', 'Supplier', 'newSupplier');
$router->register('removeSupplier', 'Supplier', 'removeSupplier');
$router->register('updateSupplier', 'Supplier', 'updateSupplier');


$response = $router->run($action);
echo json_encode($response);
