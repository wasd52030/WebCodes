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
        $name = $request->input("name");
        $email = $request->input("email");
        $phone = $request->input("phone");

        $dbRes = $this->User->addUser($id, $name, $phone, $email);
        if ($dbRes == 1) {
            return StandardResponse::res(200, '新增成功', $dbRes);
        }
        return StandardResponse::res(204, '新增失敗');
    }

    public function updateUser(Request $request, $id)
    {
        $name = $request->input("name");
        $email = $request->input("email");
        $phone = $request->input("phone");

        $dbRes = $this->User->updateUser($id, $name, $email, $phone);
        if ($dbRes == 1) {
            return StandardResponse::res(200, '修改成功', $dbRes);
        }
        return StandardResponse::res(204, '修改失敗');
    }

    public function deleteUser($id)
    {
        $dbRes = $this->User->deleteUser($id);
        if ($dbRes == 1) {
            return StandardResponse::res(200, '刪除成功', $dbRes);
        }
        return StandardResponse::res(204, '刪除失敗');
    }
}
