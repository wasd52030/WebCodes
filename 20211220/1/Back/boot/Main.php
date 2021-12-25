<?php
require_once sprintf("%s/../vendor/Autoload.php", __DIR__);

use vendor\Router;
use vendor\DataBase;


class Main
{
    static function run()
    {
        $dbconfig = parse_ini_file(sprintf("%s/../vendor/db.env", __DIR__));
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
        require_once sprintf("%s/../Route/webRouters.php", __DIR__);

        $response = $router->run($action);
        echo json_encode($response);
    }
}
