<?php

namespace app\Models;

use vendor\DataBase;

class Product
{
    public function __construct()
    {
        DataBase::Connect();
    }

    public function getProducts()
    {

        $sql = "SELECT * FROM `Product`";
        $parmas = null;

        return DataBase::Select($sql, $parmas);
    }

    public function getProduct($id)
    {

        $sql = "SELECT * FROM `Product` WHERE `id`=?";
        $parmas = array($id);

        return DataBase::Select($sql, $parmas);
    }

    public function newProduct($id, $name, $cost, $price, $Pcount)
    {

        $data = array($id, $name, $cost, $price, $Pcount);
        $sql = "INSERT INTO `Product` (`id`, `name`, `cost`, `price`, `count`) VALUES (?,?,?,?,?);";

        return DataBase::Insert($sql, $data);
    }

    public function removeProduct($id)
    {
        $data = array($id);
        $sql = "DELETE FROM Product WHERE Product.id = ?";

        return DataBase::Delete($sql, $data);
    }

    public function updateProduct($id, $name, $cost, $price, $Pcount)
    {
        $data = array($name, $cost, $price, $Pcount, $id);
        $sql = "UPDATE Product SET name=?,cost= ?,price=?,count=? WHERE Product.id= ?;";

        return DataBase::Update($sql, $data);
    }
}
