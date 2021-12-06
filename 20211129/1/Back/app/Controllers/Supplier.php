<?php
require_once sprintf("%s/../../vendor/DataBase.php", __DIR__);
require_once sprintf("%s/../../vendor/Controller.php", __DIR__);

class Supplier extends Controller
{

    public function __construct()
    {
        DataBase::Connect();
    }

    function check($name = null, $id = null, $action = null)
    {
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

    public function getSuppliers()
    {
        if (isset($_POST["id"])) {
            $id = $_POST["id"];
            $sql = "SELECT * FROM `Supplier` WHERE `Id`=?";
            $parmas = array($id);
        } else {
            $sql = "SELECT * FROM `Supplier`";
            $parmas = null;
        }
        return DataBase::Select($sql, $parmas);
    }

    public function newSupplier()
    {
        if ($this->check($_POST["Name"], 0, "add")) {
            $name = $_POST["Name"];
            $ContactPerson = $_POST["ContactPerson"];
            $Phone = $_POST["Phone"];
            $Address = $_POST["Address"];

            $sql = "INSERT INTO `supplier` (`Id`, `Name`, `ContactPerson`, `Phone`, `Address`) VALUES (NULL,?,?,?,?);";
            $data = array($name, $ContactPerson, $Phone, $Address);

            return DataBase::Insert($sql, $data);
        } else {
            return $this->res(400, "名稱重複");
        }
    }

    public function removeSupplier()
    {
        $id = $_POST["Id"];

        $sql = "DELETE FROM `supplier` WHERE `supplier`.`Id` = ?";
        $data = array($id);

        return DataBase::Delete($sql, $data);
    }

    public function updateSupplier()
    {
        if ($this->check($_POST["Name"], $_POST["Id"], "update") == true) {
            $Name = $_POST["Name"];
            $ContactPerson = $_POST["ContactPerson"];
            $Phone = $_POST["Phone"];
            $Address = $_POST["Address"];
            $id = $_POST["Id"];

            $sql = "UPDATE `supplier` SET `Name`=?,`ContactPerson`=?,`Phone`=?,`Address`=? WHERE `supplier`.`Id` = ?;";
            $data = array($Name, $ContactPerson, $Phone, $Address, $id);

            return DataBase::Update($sql, $data);
        } else {
            return $this->res(400, "名稱重複");
        }
    }
}
