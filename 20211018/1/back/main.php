<?php
require_once "./Controller.php";

if (isset($_GET['action'])) {
    $act = $_GET['action'];
} else {
    $act = "NONE";
}


switch ($act) {
    case 'areaGet':
        $c = new Controller();
        $res = $c->Areas();
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
