<?php
require_once "./sqlConfig.php";

class Employee
{
    public function getUsers()
    {
        $res = SqlConnect();
        if ($res['status'] == 200) {
            try {
                $conn = $res['result'];
                if (isset($_POST["id"])) {
                    $id = $_POST["id"];
                    $sql = "SELECT * FROM `user` WHERE `id`=?";
                    $stmt = $conn->prepare($sql);
                    $result = $stmt->execute(array($id));
                } else {
                    $sql = "SELECT  *  FROM  `user`";
                    $stmt = $conn->prepare($sql);
                    $result = $stmt->execute();
                }

                if ($result) {
                    //fetchAll(PDO::FETCH_ASSOC) => 將執行sql statement後的結果以{key:value}對回傳
                    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    $response['status'] = 200;
                    $response['message'] = '查詢成功';
                    $response['result'] = $rows;
                } else {
                    $response['status'] = 400;
                    $response['message'] = 'SQL ERROR';
                }
            } catch (PDOException $e) {
                $response['status'] = $e->getCode();
                $response['message'] = $e->getMessage();
            }
            return $response;
        }
    }

    public function newUser()
    {
        $id = $_POST['id'];
        $pwd = $_POST['pwd'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $data = array($id, $pwd, $email, $phone);

        $res = SqlConnect();

        if ($res['status'] == 200) {
            try {
                $conn = $res['result'];
                $sql = "INSERT INTO user (id, pwd,email,phone) VALUES (?, ?, ?, ?)";
                //prepare => 檢查sql statement的安全性，參數為要執行的sql statement
                $stmt = $conn->prepare($sql);
                //execute => 執行sql statement，參數為一Array，順序為在sql statement中的 ? 所代表的參數的順序
                $result = $stmt->execute($data);

                if ($result) {
                    //rowCount => 回傳執行sql statement後所影響的行數
                    $count = $stmt->rowCount();
                    if ($count < 1) {
                        $response['status'] = 204;
                        $response['message'] = '新增失敗';
                    } else {
                        $response['status'] = 200;
                        $response['message'] = '新增成功';
                    }
                } else {
                    $response['status'] = 400;
                    $response['message'] = 'SQL ERROR';
                }
            } catch (PDOException $e) {
                $response['status'] = $e->getCode();
                $response['message'] = $e->getMessage();
            }

            return $response;
        }
    }

    public function removeUser()
    {
        $id = $_POST['id'];
        $res = SqlConnect();
        if ($res['status'] == 200) {
            try {
                $conn = $res['result'];
                $sql = "DELETE FROM user WHERE user.id = ?";
                //prepare => 檢查sql statement的安全性，參數為要執行的sql statement
                $stmt = $conn->prepare($sql);
                //execute => 執行sql statement，參數為一Array，順序為在sql statement中的 ? 所代表的參數的順序
                $result = $stmt->execute(array($id));

                if ($result) {
                    $response['status'] = 200;
                    $response['message'] = '刪除成功';
                } else {
                    $response['status'] = 400;
                    $response['message'] = 'SQL ERROR';
                }
            } catch (PDOException $e) {
                $response['status'] = $e->getCode();
                $response['message'] = $e->getMessage();
            }
            return $response;
        }
    }

    public function updateUser()
    {
        $id = $_POST['id'];
        $pwd = $_POST['pwd'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $data = array($pwd, $email, $phone, $id);

        $res = SqlConnect();

        if ($res['status'] == 200) {
            try {
                $conn = $res['result'];
                $sql = "UPDATE user SET pwd=?,email=?,phone=? WHERE user.id = ?";
                //prepare => 檢查sql statement的安全性，參數為要執行的sql statement
                $stmt = $conn->prepare($sql);
                //execute => 執行sql statement，參數為一Array，順序為在sql statement中的 ? 所代表的參數的順序
                $result = $stmt->execute($data);

                if ($result) {
                    //rowCount => 回傳執行sql statement後所影響的行數
                    $count = $stmt->rowCount();
                    if ($count < 1) {
                        $response['status'] = 204;
                        $response['message'] = '更新失敗';
                    } else {
                        $response['status'] = 200;
                        $response['message'] = '更新成功';
                    }
                } else {
                    $response['status'] = 400;
                    $response['message'] = 'SQL ERROR';
                }
            } catch (PDOException $e) {
                $response['status'] = $e->getCode();
                $response['message'] = $e->getMessage();
            }

            return $response;
        }
    }
}
