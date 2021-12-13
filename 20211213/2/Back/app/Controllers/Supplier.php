<?php

namespace app\Controllers;

use vendor\Controller;
use vendor\DataBase;
use app\Models\Supplier as SupplierModel;

class Supplier extends Controller
{

    private $m;
    public function __construct()
    {
        $this->m = new SupplierModel();
    }

    public function getSuppliers()
    {
        return isset($_POST["id"]) ? $this->m->getSupplier($_POST["id"]) : $this->m->getSuppliers();
    }

    public function newSupplier()
    {
        $name = $_POST["Name"];
        $ContactPerson = $_POST["ContactPerson"];
        $Phone = $_POST["Phone"];
        $Address = $_POST["Address"];
        if ($this->m->check(name: $name, action: "add")) {
            return $this->m->newSupplier($name, $ContactPerson, $Phone, $Address);
        } else {
            return $this->res(400, "名稱重複");
        }
    }

    public function removeSupplier()
    {
        $id = $_POST["Id"];
        return $this->m->removeSupplier($id);
    }

    public function updateSupplier()
    {
        // if ($this->check($_POST["Name"], $_POST["Id"], "update") == true) {

        //     $sql = "UPDATE `supplier` SET `Name`=?,`ContactPerson`=?,`Phone`=?,`Address`=? WHERE `supplier`.`Id` = ?;";
        //     $data = array($Name, $ContactPerson, $Phone, $Address, $id);

        //     return DataBase::Update($sql, $data);
        // } else {
        //     return $this->res(400, "名稱重複");
        // }
        $Name = $_POST["Name"];
        $ContactPerson = $_POST["ContactPerson"];
        $Phone = $_POST["Phone"];
        $Address = $_POST["Address"];
        $id = $_POST["Id"];
        if ($this->m->check($Name, $id, "update")) {
            return $this->m->updateSupplier($id, $Name, $ContactPerson, $Phone, $Address);
        } else {
            return $this->res(400, "名稱重複");
        }
    }
}
