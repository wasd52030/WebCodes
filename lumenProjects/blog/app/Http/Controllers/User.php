<?php
namespace App\Http\Controllers;

use App\Models\User as UserModel;
use Illuminate\Http\Request;
use App\Http\Utils\StandardResponse;

class User extends Controller
{
    protected $User;

    public function __construct()
    {
        $this->User = new UserModel();
    }

    public function getAllUsers()
    {
        $dbRes = $this->User->showAll();
        if (count($dbRes) != 0) {
            return StandardResponse::res(200, '查詢成功', $dbRes);
        }
        return StandardResponse::res(204, '無查詢結果');
    }


    public function getUser($id)
    {
        $dbRes = $this->User->showUser($id);
        if (count($dbRes) != 0) {
            return StandardResponse::res(200, '查詢成功', $dbRes);
        }
        return StandardResponse::res(204, '無查詢結果');
    }

    public function addUser(Request $request)
    {
        $id = $request->input("id");
        $password = $request->input("pwd");
        $email = $request->input("email");
        $phone = $request->input("phone");

        $dbRes = $this->User->addUser($id, $password, $phone, $email);
        if ($dbRes == 1) {
            return StandardResponse::res(200, '新增成功', $dbRes);
        }
        return StandardResponse::res(204, '新增成功');
    }

    public function updateUser(Request $request, $id)
    {
        $password = $request->input("pwd");
        $email = $request->input("email");
        $phone = $request->input("phone");

        $dbRes = $this->User->updateUser($id, $password, $email, $phone);
        if ($dbRes == 1) {
            return StandardResponse::res(200, '修改成功', $dbRes);
        }
        return StandardResponse::res(204, '修改成功');
    }

    public function deleteUser($id)
    {
        $dbRes = $this->User->deleteUser($id);
        if ($dbRes == 1) {
            return StandardResponse::res(200, '刪除成功', $dbRes);
        }
        return StandardResponse::res(204, '刪除成功');
    }
}
