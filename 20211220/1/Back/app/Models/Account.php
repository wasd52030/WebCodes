<?php

namespace app\Models;

use vendor\DataBase;

class Account
{

    public function __construct()
    {
        DataBase::Connect();
    }

    public function Authorization($UserID, $PassWord)
    {
        $sql = "SELECT * FROM `account` WHERE `UserID`=? AND `PassWord`=?";
        $parmas = array($UserID, $PassWord);
        return DataBase::Select($sql, $parmas);
    }

    public function newAccount($UserID, $PassWord, $UserName, $Mobile)
    {
        $data = array($UserID, $PassWord, $UserName, $Mobile);
        $sql = "INSERT INTO `account` (`UserID`, `PassWord`, `UserName`, `Mobile`) VALUES (?,?,?,?);";

        return DataBase::Insert($sql, $data);
    }

    public function updateAccount($UserID, $PassWord, $UserName, $Mobile)
    {
        $data = array($UserID, $PassWord, $UserName, $Mobile);
        $sql = "UPDATE account SET PassWord=?,UserName= ?,Mobile=? WHERE account.UserID= ?;";

        return DataBase::Update($sql, $data);
    }
}
