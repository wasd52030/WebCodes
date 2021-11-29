<?php
require_once "./Router.php";
require_once "./DataBase.php";

class Main
{
    static function run()
    {
        $dbconfig = parse_ini_file("./db.env");
        DataBase::$db_host = $dbconfig["db_host"];
        DataBase::$db_name = $dbconfig["db_name"];
        DataBase::$db_user = $dbconfig["db_user"];
        DataBase::$db_pwd = $dbconfig["db_pwd"];

        if (isset($_GET['action'])) {
            $action = $_GET['action'];
        } else {
            $action = "_no_action";
        }

        $router = new Router();
        require_once "./webRouters.php";
        $response = $router->run($action);
        echo json_encode($response);
    }
}
