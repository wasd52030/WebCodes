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

    public function getAccountIDs()
    {
        if (isset($_POST["id"])) {
            return $this->m->getAccount($_POST["id"]);
        } else {
            return $this->m->getAccountIDs();
        }
    }

    public function getAccount()
    {
        return $this->m->AccountGET($_POST["id"]);
    }

    public function getAccountNameByID()
    {
        return $this->m->getAccountNameByID($_POST["id"]);
    }

    public function updateAccount()
    {
        $id = $_POST['id'];
        $password = $_POST['password'];
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];

        return $this->m->updateAccount($id, $password, $name, $email, $phone);
    }
}
