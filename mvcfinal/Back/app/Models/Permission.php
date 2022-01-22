<?php

namespace app\Models;

use vendor\DataBase;

class Permission
{
    public function __construct()
    {
        DataBase::Connect();
    }


    public function UserRole($id)
    {
        $sql = "select role_id from user_role where user_id=?";
        return DataBase::Select($sql, array($id));
    }

    public function ActionRole($action){
        $sql="select role_action.role_id from action, role_action where action.name=? and role_action.action_id=action.id";
        return DataBase::Select($sql, array($action));
    }
}
