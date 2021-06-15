<?php
require_once 'sqlConfig.php';

function Update()
{
    $id = $_POST['id'];
    $name = $_POST['name'];
    $price = $_POST['price'];
    $mk_price = $_POST['mk_price'];
    $data = array($name, $price, $mk_price, $id);

    $res = SqlConnect();

    if ($res['status'] == 200) {
        try {
            $conn = $res['result'];
            $sql = "UPDATE gp SET name=?,price=?,mk_price=? WHERE gp.id = ?";
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
