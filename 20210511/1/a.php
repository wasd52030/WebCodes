<?php
$id=$_POST['id'];
$name=$_POST['name'];
$addr=$_POST['addr'];
$birth=$_POST['birth'];
$data=array($name,$addr,$birth,$id);

$db_host = 'localhost';
$db_name = 'n';
$db_user = 'root';
$db_password = '';
$dsn = "mysql:host=$db_host;dbname=$db_name;charset=utf8";

try {
    $conn = new PDO($dsn, $db_user, $db_password);
    $sql = "UPDATE `x` SET `name`=?, `addr`=?, `birth`=? WHERE `id`=?";
    $stmt = $conn->prepare($sql);
    $result = $stmt->execute($data);
    if ($result) {
        $count = $stmt->rowCount();
        if ($count < 1) {
            $response['status'] = 204; //No Content
            $response['message'] = "更新失敗";
        } else {
            $response['status'] = 200; //OK
            $response['message'] = "更新成功";
        }
    } else {
        $response['status'] = 400; //Bad Request
        $response['message'] = "SQL錯誤";
    }
} catch (PDOException $e) {
    $response['status'] = $e->getCode;
    $response['message'] = $e->getMessage();
}
echo json_encode($response);
