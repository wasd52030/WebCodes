<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Lumen\Auth\Authorizable;

class User
{
    public function showAll()
    {
        $sql = "select * from user";
        $response = DB::select($sql);
        return $response;
    }

    public function showUser($id)
    {
        $sql = "select * from user where id=?";
        $response = DB::select($sql, [$id]);
        return $response;
    }

    public function addUser($id, $pwd, $email, $phone)
    {
        $sql = "insert into user (id, pwd, email, phone) values (:id, :pwd, :email, :phone)";
        $response = DB::insert($sql, ["id" => $id, "pwd" => $pwd, "email" => $email, "phone" => $phone]);
        return $response;
    }

    public function updateUser($id, $pwd, $email, $phone)
    {
        $sql = "update user set phone=:phone, pwd=:pass, email=:email where id=:id";
        $response = DB::update($sql, ["id" => $id, "pass" => $pwd, "email" => $email, "phone" => $phone]);
        return $response;
    }

    public function deleteUser($id)
    {
        $sql = "delete from user where id=?";
        $response = DB::delete($sql, [$id]);
        return $response;
    }
}
