<?php

namespace app\Models;

use vendor\Controller;
use vendor\DataBase;

class Employee extends Controller
{

    public function __construct()
    {
        DataBase::Connect();
    }

    public function getUsers()
    {
        $sql = "SELECT * FROM `employee`";
        $parmas = null;
        return DataBase::Select($sql, $parmas);
    }

    public function getUser($id)
    {
        $sql = "SELECT * FROM `employee` WHERE `id`=?";
        $parmas = array($id);
        return DataBase::Select($sql, $parmas);
    }

    public function newUser($id, $name, $pwd, $EntryDate, $address, $email, $phone)
    {
        $data = array($id, $name, $pwd, $EntryDate, $address, $email, $phone);
        $sql = "INSERT INTO `employee` (`id`, `name`, `pwd`, `EntryDate`, `address`, `email`, `phone`) VALUES (?,?,?,?,?,?,?);";

        return DataBase::Insert($sql, $data);
    }

    public function removeUser($id)
    {
        $data = array($id);
        $sql = "DELETE FROM employee WHERE employee.id = ?";
        return DataBase::Delete($sql, $data);
    }

    public function updateUser($id, $name, $pwd, $EntryDate, $address, $email, $phone)
    {
        $data = array($name, $pwd, $EntryDate, $address, $email, $phone, $id);
        $sql = "UPDATE employee SET name=?,pwd= ?,EntryDate=?,address=?,email=?,phone= ? WHERE employee.id= ?;";

        return DataBase::Update($sql, $data);
    }
}
