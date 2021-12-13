<?php

namespace app\Models;

use vendor\Controller;
use vendor\DataBase;

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
            $sql = "SELECT * FROM `supplier` WHERE supplier.Name=? AND supplier.id!=?";
            $parmas = array($name, $id);
            $result = DataBase::Select($sql, $parmas);

            if ($result) {
                return (count($result["result"]) < 1) ? true : false;
            }
        }
    }

    public function getSuppliers()
    {
        $sql = "SELECT * FROM `Supplier`";
        $parmas = null;

        return DataBase::Select($sql, $parmas);
    }

    public function getSupplier($id)
    {
        $sql = "SELECT * FROM `Supplier` WHERE `Id`=?";
        $parmas = array($id);

        return DataBase::Select($sql, $parmas);
    }

    public function newSupplier($name, $ContactPerson, $Phone, $Address)
    {
        $sql = "INSERT INTO `supplier` (`Id`, `Name`, `ContactPerson`, `Phone`, `Address`) VALUES (NULL,?,?,?,?);";
        $data = array($name, $ContactPerson, $Phone, $Address);

        return DataBase::Insert($sql, $data);
    }

    public function removeSupplier($id)
    {
        $sql = "DELETE FROM `supplier` WHERE `supplier`.`Id` = ?";
        $data = array($id);

        return DataBase::Delete($sql, $data);
    }

    public function updateSupplier($id, $Name, $ContactPerson, $Phone, $Address)
    {
        $sql = "UPDATE `supplier` SET `Name`=?,`ContactPerson`=?,`Phone`=?,`Address`=? WHERE `supplier`.`Id` = ?;";
        $data = array($Name, $ContactPerson, $Phone, $Address, $id);

        return DataBase::Update($sql, $data);
    }
}
