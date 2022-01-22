<?php
require_once sprintf("%s/../vendor/Autoload.php", __DIR__);

use app\Controllers\Account;
use vendor\Router;
use vendor\DataBase;
use app\Middleware\AuthMiddleware;
use app\controllers\ClassData;
use app\Models\Permission;
use vendor\Controller;

class Main extends Controller
{
    static function run()
    {
        //DataBase
        $ConfigVar = parse_ini_file(sprintf("%s/../vendor/config.env", __DIR__));
        DataBase::$db_host = $ConfigVar["db_host"];
        DataBase::$db_name = $ConfigVar["db_name"];
        DataBase::$db_user = $ConfigVar["db_user"];
        DataBase::$db_pwd = $ConfigVar["db_pwd"];

        if (isset($_GET['action'])) {
            $action = $_GET['action'];
        } else {
            $action = "_no_action";
        }

        $response = $responseToken = AuthMiddleware::checkToken();

        if ($responseToken['status'] == 200) {
            if ($action != "_no_action") {
                $u = new Permission();
                $UserRole = $u->UserRole($response["userid"]);
                $ActionRole = $u->ActionRole($action);
                $r = array_uintersect($UserRole["result"], $ActionRole["result"], function ($a, $b) {
                    if ($a === $b) {
                        return 0;
                    }
                    return ($a > $b) ? 1 : -1;
                });
                if (count($r) != 0) {
                    $router = new Router();
                    require_once sprintf("%s/../Route/webRouters.php", __DIR__);
                    $response = $router->run($action);
                    $response['token'] = $responseToken['token'];
                    $response["role"]=$UserRole["result"][0]["role_id"];
                } else {
                    $response = Controller::res(404, "未具權限");
                    $response['token'] = $responseToken['token'];
                }
            }
        } else {
            $temp = new Account();
            switch ($action) {
                case 'Login':
                    $response = AuthMiddleware::Login();
                    break;
                case 'getAccountIDs':
                    $response = $temp->getAccountIDs();
                    break;
                case 'getClassDatas':
                    $cdata = new ClassData();
                    $response = $cdata->getClassDatas();
                    break;
                case "getAccountNameByID":
                    $response = $temp->getAccountNameByID();
                    break;
                default:
                    break;
            }
        }

        echo json_encode($response);
    }
}
