<?php
require_once "./sqlConfig.php";
require_once "./Controller.php";

class Supplier extends Controller
{

    public function getSuppliers()
    {
        $res = SqlConnect();
        if ($res['status'] == 200) {
            try {
                $conn = $res['result'];
                if (isset($_POST["id"])) {
                    $id = $_POST["id"];
                    $sql = "SELECT * FROM `Supplier` WHERE `Id`=?";
                    $stmt = $conn->prepare($sql);
                    $result = $stmt->execute(array($id));
                } else {
                    $sql = "SELECT * FROM `Supplier`";
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
                    $sql = "SELECT * FROM `supplier` WHERE supplier.Name=?";
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
                    $sql = "SELECT * FROM `supplier` WHERE supplier.id!=?";
                    //prepare => 檢查sql statement的安全性，參數為要執行的sql statement
                    $stmt = $conn->prepare($sql);
                    //execute => 執行sql statement，參數為一Array，順序為在sql statement中的 ? 所代表的參數的順序
                    $result = $stmt->execute(array($id));

                    if ($result) {
                        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
                        $flag = true;
                        foreach ($rows as $row) {
                            if ($name == $row["Name"]) {
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

    public function newSupplier()
    {
        $name = $_POST['Name'];
        $ContactPerson = $_POST['ContactPerson'];
        $Phone = $_POST['Phone'];
        $Address = $_POST['Address'];
        $data = array($name, $ContactPerson, $Phone, $Address);

        $res = SqlConnect();

        if ($res['status'] == 200) {
            try {
                $conn = $res['result'];
                if ($this->check($name, 0, "add")) {
                    $sql = "INSERT INTO `supplier` (`Id`, `Name`, `ContactPerson`, `Phone`, `Address`) VALUES (NULL,?,?,?,?);";
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

    public function removeSupplier()
    {
        $id = $_POST['Id'];
        $res = SqlConnect();
        if ($res['status'] == 200) {
            try {
                $conn = $res['result'];
                $sql = "DELETE FROM `supplier` WHERE `supplier`.`Id` = ?";
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

    public function updateSupplier()
    {
        $Name = $_POST['Name'];
        $ContactPerson = $_POST['ContactPerson'];
        $Phone = $_POST['Phone'];
        $Address = $_POST['Address'];
        $id = $_POST['Id'];
        $data = array($Name, $ContactPerson, $Phone, $Address, $id);

        $res = SqlConnect();

        if ($res['status'] == 200) {
            try {
                if ($this->check($Name, $id, "update") == true) {
                    $conn = $res['result'];
                    $sql = "UPDATE `supplier` SET `Name`=?,`ContactPerson`=?,`Phone`=?,`Address`=? WHERE `supplier`.`Id` = ?;";
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
