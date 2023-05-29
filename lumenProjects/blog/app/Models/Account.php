<?php
namespace App\Models;

use Illuminate\Support\Facades\DB;

class Account
{
    public function getAccount($account)
    {
        $sql = "SELECT  *  FROM  account where account=?";
        $response = DB::select($sql, [$account]);
        return $response;
    }

    public function register($account, $password, $name)
    {
        if (count($this->getAccount($account)) != 0) {
            return ["message" => "帳號重複"];
        }

        $sql = "INSERT INTO account (UserID,name, account,PassWord) VALUES (:id, :name, :account, :password)";
        $res = DB::insert($sql, ["id" => null, "name" => $name, "account" => $account, "password" => $password]);
        if ($res) {
            return ["message" => "註冊成功"];
        }
        return ["message" => "註冊失敗"];
    }
}
