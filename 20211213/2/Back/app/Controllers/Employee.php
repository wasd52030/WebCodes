<?php

namespace app\Controllers;

use vendor\Controller;
use app\Models\Employee as EmoloyeeModel;

class Employee extends Controller
{

    private $m;
    public function __construct()
    {
        $this->m = new EmoloyeeModel();
    }

    public function getUsers()
    {
        return isset($_POST["id"]) ? $this->m->getUser($_POST["id"]) : $this->m->getUsers();
    }

    public function newUser()
    {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $pwd = $_POST['pwd'];
        $EntryDate = $_POST['EntryDate'];
        $address = $_POST['address'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];

        return $this->m->newUser($id, $name, $pwd, $EntryDate, $address, $email, $phone);
    }

    public function removeUser()
    {
        $id = $_POST['id'];
        return $this->m->removeUser($id);
    }

    public function updateUser()
    {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $pwd = $_POST['pwd'];
        $EntryDate = $_POST['EntryDate'];
        $address = $_POST['address'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];

        return $this->m->updateUser($id, $name, $pwd, $EntryDate, $address, $email, $phone);
    }
}
