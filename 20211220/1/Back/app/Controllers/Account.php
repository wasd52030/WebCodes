<?php

namespace app\Controllers;

use vendor\Controller;
use app\Models\Account as AccountModel;

class Account extends Controller
{
    private $m;
    public function __construct()
    {
        $this->m = new AccountModel();
    }

    public function newAccount()
    {
        $UserID = $_POST['UserID'];
        $PassWord = $_POST['PassWord'];
        $UserName = $_POST['UserName'];
        $Mobile = $_POST['Mobile'];

        return $this->m->newAccount($UserID, $PassWord, $UserName, $Mobile);
    }


    public function updateAccount()
    {
        $UserID = $_POST['UserID'];
        $PassWord = $_POST['PassWord'];
        $UserName = $_POST['UserName'];
        $Mobile = $_POST['Mobile'];

        return $this->m->updateAccount($UserID, $PassWord, $UserName, $Mobile);
    }
}
