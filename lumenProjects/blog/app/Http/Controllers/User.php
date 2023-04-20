<?php
namespace App\Http\Controllers;

use App\Models\User as UserModel;
use Illuminate\Http\Request;

class User extends Controller
{
    protected $User;

    public function __construct()
    {
        $this->User = new UserModel();
    }

    public function getAllUsers()
    {
        return $this->User->showAll();
    }


    public function getUser($id)
    {
        return $this->User->showUser($id);
    }

    public function addUser(Request $request)
    {
        $id = $request->input("id");
        $password = $request->input("pwd");
        $email = $request->input("email");
        $phone = $request->input("phone");
        return $this->User->addUser($id, $password, $phone, $email);
    }

    public function updateUser(Request $request)
    {
        $id = $request->input("id");
        $password = $request->input("pwd");
        $email = $request->input("email");
        $phone = $request->input("phone");
        return $this->User->updateUser($id, $password, $email, $phone);
    }

    public function deleteUser(Request $request)
    {
        $id = $request->input("id");
        return $this->User->deleteUser($id);
    }
}
