<?php
require_once "./sqlConfig.php";
require_once "./Controller.php";

class Employee extends Controller
{

    public function getUsers()
    {
        $res = SqlConnect();
        if ($res['status'] == 200) {
            try {
                $conn = $res['result'];
                if (isset($_POST["id"])) {
                    $id = $_POST["id"];
                    $sql = "SELECT * FROM `employee` WHERE `id`=?";
                    $stmt = $conn->prepare($sql);
                    $result = $stmt->execute(array($id));
                } else {
                    $sql = "SELECT * FROM `employee`";
                    $stmt = $conn->prepare($sql);
                    $result = $stmt->execute();
                }

                if ($result) {
                    //fetchAll(PDO::FETCH_ASSOC) => 將執行sql statement後的結果以{key:value}對回傳
                    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    return $this->res(200, "查詢成功", $rows);
                } else {
                    return $this->res(400, "SQL ERROR");
                }
            } catch (PDOException $e) {
                return $this->res($e->getCode(), $e->getMessage());
            }
        }
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
        $data = array($id, $name, $pwd, $EntryDate, $address, $email, $phone);

        $res = SqlConnect();

        if ($res['status'] == 200) {
            try {
                $conn = $res['result'];
                $sql = "INSERT INTO `employee` (`id`, `name`, `pwd`, `EntryDate`, `address`, `email`, `phone`) VALUES (?,?,?,?,?,?,?);";
                //prepare => 檢查sql statement的安全性，參數為要執行的sql statement
                $stmt = $conn->prepare($sql);
                //execute => 執行sql statement，參數為一Array，順序為在sql statement中的 ? 所代表的參數的順序
                $result = $stmt->execute($data);

                if ($result) {
                    //rowCount => 回傳執行sql statement後所影響的行數
                    $count = $stmt->rowCount();
                    return ($count < 1) ? $this->res(204, "新增失敗") : $this->res(200, "新增成功");
                } else {
                    return $this->res(400, "SQL錯誤");
                }
            } catch (PDOException $e) {
                return $this->res(400, "SQL錯誤");
            }
        }
    }

    public function removeUser()
    {
        $id = $_POST['id'];
        $res = SqlConnect();
        if ($res['status'] == 200) {
            try {
                $conn = $res['result'];
                $sql = "DELETE FROM employee WHERE employee.id = ?";
                //prepare => 檢查sql statement的安全性，參數為要執行的sql statement
                $stmt = $conn->prepare($sql);
                //execute => 執行sql statement，參數為一Array，順序為在sql statement中的 ? 所代表的參數的順序
                $result = $stmt->execute(array($id));

                if ($result) {
                    $count = $stmt->rowCount();
                    return ($count < 1) ? $this->res(204, "刪除失敗") : $this->res(200, "刪除成功");
                } else {
                    return $this->res(400, "SQL錯誤");
                }
            } catch (PDOException $e) {
                return $this->res($e->getCode(), $e->getMessage());
            }
        }
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
        $data = array($name, $pwd, $EntryDate, $address, $email, $phone, $id);

        $res = SqlConnect();

        if ($res['status'] == 200) {
            try {
                $conn = $res['result'];
                $sql = "UPDATE employee SET name=?,pwd= ?,EntryDate=?,address=?,email=?,phone= ? WHERE employee.id= ?;";
                //prepare => 檢查sql statement的安全性，參數為要執行的sql statement
                $stmt = $conn->prepare($sql);
                //execute => 執行sql statement，參數為一Array，順序為在sql statement中的 ? 所代表的參數的順序
                $result = $stmt->execute($data);

                if ($result) {
                    //rowCount => 回傳執行sql statement後所影響的行數
                    $count = $stmt->rowCount();
                    return ($count < 1) ? $this->res(204, "更新失敗") : $this->res(200, "更新成功");
                } else {
                    $response['status'] = 400;
                    $response['message'] = 'SQL ERROR';
                }
            } catch (PDOException $e) {
                return $this->res(400, "SQL錯誤");
            }

            return $response;
        }
    }
}
