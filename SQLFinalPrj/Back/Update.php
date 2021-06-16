<?php
require_once 'sqlConfig.php';

function Update()
{
    $res = SqlConnect();
    $id = $_POST['id'];

    if ($res['status'] == 200) {
        try {
            $conn = $res['result'];
            if (isset($_POST["ordercnt"])) {
                $sql = "UPDATE gp SET ordercnt=? WHERE gp.id = ?";
                $data = array($_POST["ordercnt"], $id);
                $m = "購買";
            } else {
                $sql = "UPDATE gp SET name=?,price=?,mk_price=? WHERE gp.id = ?";
                $data = array($_POST['name'], $_POST['price'], $_POST['mk_price'], $id);
                $m = "更新";
            }
            //prepare => 檢查sql statement的安全性，參數為要執行的sql statement
            $stmt = $conn->prepare($sql);
            //execute => 執行sql statement，參數為一Array，順序為在sql statement中的 ? 所代表的參數的順序
            $result = $stmt->execute($data);


            if ($result) {
                //rowCount => 回傳執行sql statement後所影響的行數
                $count = $stmt->rowCount();
                if ($count < 1) {
                    $response['status'] = 204;
                    $response['message'] = $m . '失敗';
                } else {
                    $response['status'] = 200;
                    $response['message'] = $m . '成功';
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
