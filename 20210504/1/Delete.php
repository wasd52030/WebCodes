<?php
$id=$_GET['id'];
$db_host = 'localhost';
$db_name = 'n';
$db_user = 'root';
$db_pwd = '';
$dsn = "mysql:host=$db_host;dbname=$db_name;charest=UTF-8";

try {
    $conn = new PDO($dsn, $db_user, $db_pwd);
    $sql = "DELETE FROM `x` WHERE id=?";
    $stmt = $conn->prepare($sql);
    $result = $stmt->execute(array($id));
    if ($result) {
        $cnt = $stmt->rowCount();
        if ($cnt < 1) {
            $res['status'] = 204;
            $res['message'] = '刪除失敗';
        } else {
            $res['status'] = 200;
            $res['message'] = '刪除成功';
        }
    } else {
        $res['status'] = 400;
        $res['message'] = 'SQL錯誤';
    }
} catch (PDOException $e) {
    $res['status'] = $e->getCode();
    $res['message'] = $e->getMessage();
}

echo json_encode($res);
