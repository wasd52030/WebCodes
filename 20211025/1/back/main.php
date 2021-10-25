<?php
require_once "./Controller.php";
require_once "./Router.php";

if (isset($_GET['action'])) {
    $act = $_GET['action'];
} else {
    $act = "NONE";
}


switch ($act) {
    case 'getArea':
        $router = new Router();
        $router->Register($act, "Controller", "Areas");
        $res = $router->run($act);
        break;

    default:
        $res = array(
            "status" => 404,
            "message" => "action not found",
        );
        $res = json_encode($res);
        break;
}

echo $res;
