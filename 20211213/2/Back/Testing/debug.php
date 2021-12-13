<?php
// place some php code you want to debug,and start
require_once sprintf("%s/../vendor/DataBase.php", __DIR__);
require_once sprintf("%s/../vendor/Controller.php", __DIR__);

function checkA($name = null, $id = null, $action = null)
{

    $dbconfig = parse_ini_file(sprintf("%s/../vendor/db.env", __DIR__));
    DataBase::$db_host = $dbconfig["db_host"];
    DataBase::$db_name = $dbconfig["db_name"];
    DataBase::$db_user = $dbconfig["db_user"];
    DataBase::$db_pwd = $dbconfig["db_pwd"];
    DataBase::Connect();

    if ($action == "add") {
        $sql = "SELECT * FROM `characters` WHERE characters.name=?";
        $parmas = array($name);
        $result = DataBase::Select($sql, $parmas);

        if ($result) {
            return (count($result["result"]) < 1) ? true : false;
        }
    } elseif ($action == "update") {
        $sql = "SELECT * FROM `characters` WHERE characters.id!=?";
        $parmas = array($id);
        $result = DataBase::Select($sql, $parmas);

        if ($result) {
            $flag = true;
            foreach ($result["result"] as $i) {
                if ($name == $i["name"]) {
                    $flag = false;
                    break;
                }
            }
            return $flag;
        }
    }
}

function checkS($name = null, $id = null, $action = null)
{
    $dbconfig = parse_ini_file(sprintf("%s/../vendor/db.env", __DIR__));
    DataBase::$db_host = $dbconfig["db_host"];
    DataBase::$db_name = $dbconfig["db_name"];
    DataBase::$db_user = $dbconfig["db_user"];
    DataBase::$db_pwd = $dbconfig["db_pwd"];
    DataBase::Connect();

    if ($action == "add") {
        $sql = "SELECT * FROM `supplier` WHERE supplier.Name=?";
        $parmas = array($name);
        $result = DataBase::Select($sql, $parmas);

        if ($result) {
            return (count($result["result"]) < 1) ? true : false;
        }
    } elseif ($action == "update") {
        $sql = "SELECT * FROM `supplier` WHERE supplier.id!=?";
        $parmas = array($id);
        $result = DataBase::Select($sql, $parmas);

        if ($result) {
            $flag = true;
            foreach ($result["result"] as $i) {
                if ($name == $i["Name"]) {
                    $flag = false;
                    break;
                }
            }
            return $flag;
        }
    }
}
