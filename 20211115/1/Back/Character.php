<?php
require_once "./sqlConfig.php";

class Character
{
    private function res($status, $message, $result = null)
    {
        return array(
            "status" => $status,
            "message" => $message,
            "result" => $result
        );
    }

    public function getCharacters()
    {
        $res = SqlConnect();
        if ($res['status'] == 200) {
            try {
                $conn = $res['result'];
                if (isset($_POST["id"])) {
                    $id = $_POST["id"];
                    $sql = "SELECT * FROM `characters` WHERE `id`=?";
                    $stmt = $conn->prepare($sql);
                    $result = $stmt->execute(array($id));
                } else {
                    $sql = "SELECT * FROM `characters`";
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

    public function check($name = null, $id = null, $action = null)
    {
        $res = SqlConnect();

        if ($res['status'] == 200) {
            try {
                $conn = $res['result'];
                if ($action == "add") {
                    $sql = "SELECT * FROM `characters` WHERE characters.name=?";
                    //prepare => 檢查sql statement的安全性，參數為要執行的sql statement
                    $stmt = $conn->prepare($sql);
                    //execute => 執行sql statement，參數為一Array，順序為在sql statement中的 ? 所代表的參數的順序
                    $result = $stmt->execute(array($name));

                    if ($result) {
                        //rowCount => 回傳執行sql statement後所影響的行數
                        $count = $stmt->rowCount();
                        return ($count < 1) ? true : false;
                    }
                } elseif ($action == "update") {
                    $sql = "SELECT * FROM `characters` WHERE characters.id!=?";
                    //prepare => 檢查sql statement的安全性，參數為要執行的sql statement
                    $stmt = $conn->prepare($sql);
                    //execute => 執行sql statement，參數為一Array，順序為在sql statement中的 ? 所代表的參數的順序
                    $result = $stmt->execute(array($name));

                    if ($result) {
                        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
                        $flag = true;
                        foreach ($rows as $row) {
                            if ($name == $row["name"]) {
                                $flag = false;
                                break;
                            }
                        }
                        return $flag;
                    }
                }
            } catch (PDOException $e) {
                echo $e;
            }
        }
    }

    public function newCharacter()
    {
        $name = $_POST['name'];
        $data = array($name);

        $res = SqlConnect();

        if ($res['status'] == 200) {
            try {
                $conn = $res['result'];
                if ($this->check($name, 0, "add")) {
                    $sql = "INSERT INTO `characters` (`id`, `name`) VALUES (NULL,?);";
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
                } else {
                    return $this->res(400, "名稱重複");
                }
            } catch (PDOException $e) {
                return $this->res(400, "SQL錯誤");
            }
        }
    }

    public function removeCharacter()
    {
        $id = $_POST['id'];
        $res = SqlConnect();
        if ($res['status'] == 200) {
            try {
                $conn = $res['result'];
                $sql = "DELETE FROM `characters` WHERE `characters`.`id` = ?";
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

    public function updateCharacter()
    {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $data = array($name, $id);

        $res = SqlConnect();

        if ($res['status'] == 200) {
            try {
                if ($this->check($name, $id, "update")) {
                    $conn = $res['result'];
                    $sql = "UPDATE `characters` SET `name` = ? WHERE `characters`.`id` = ?;";
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
                } else {
                    return $this->res(400, "名稱重複");
                }
            } catch (PDOException $e) {
                return $this->res(400, "SQL錯誤");
            }

            return $response;
        }
    }
}
