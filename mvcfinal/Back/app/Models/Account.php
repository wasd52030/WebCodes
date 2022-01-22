<?php

namespace app\Models;

use vendor\DataBase;

class Account
{

    public function __construct()
    {
        DataBase::Connect();
    }

    public function getAccountIDs(){
        $sql = "SELECT id FROM `profile`";
        return DataBase::Select($sql, null);
    }

    public function getAccount($UserID)
    {
        $sql = "SELECT id FROM `profile` WHERE `id`=?";
        $parmas = array($UserID);
        return DataBase::Select($sql, $parmas);
    }

    public function getAccountNameByID($UserID)
    {
        $sql = "SELECT name FROM `profile` WHERE `id`=?";
        $parmas = array($UserID);
        return DataBase::Select($sql, $parmas);
    }

    public function AccountGET($UserID)
    {
        $sql = "SELECT * FROM `profile` WHERE `id`=?";
        $parmas = array($UserID);
        return DataBase::Select($sql, $parmas);
    }

    public function Authorization($UserID, $PassWord)
    {
        $sql = "SELECT * FROM `profile` WHERE `id`=? AND `password`=?";
        $parmas = array($UserID, $PassWord);
        return DataBase::Select($sql, $parmas);
    }

    public function updateAccount($UserID, $PassWord, $UserName, $email, $phone)
    {
        $data = array($PassWord, $UserName, $email, $phone, $UserID);
        $sql = "UPDATE `profile` SET password=?,name= ?,email=?,phone=? WHERE `profile`.id= ?;";

        return DataBase::Update($sql, $data);
    }
}
