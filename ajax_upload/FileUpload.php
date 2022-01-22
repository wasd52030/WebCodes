<?php
require_once 'sql.php';

$file = $_FILES["data"];
$a = $_POST["a"];


if ($file["error"] > 0) {
    echo json_encode(array("err" => $file["error"]));
} else {
    move_uploaded_file($file["tmp_name"], sprintf('files/%s', $file["name"]));
    $res = SqlConnect();

    if ($res['status'] == 200) {
        try {
            $conn = $res['result'];
            $sql = "INSERT INTO files (id, filename) VALUES (null, ?)";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute(array($file["name"]));

            if ($result) {
                $count = $stmt->rowCount();
                if ($count < 1) {
                    $response['status'] = 204;
                    $response['message'] = '上傳失敗';
                } else {
                    $response['status'] = 200;
                    $response['message'] = '上傳成功';
                }
            } else {
                $response['status'] = 400;
                $response['message'] = 'SQL ERROR';
            }
        } catch (PDOException $e) {
            $response['status'] = $e->getCode();
            $response['message'] = $e->getMessage();
        }
    }
}

echo json_encode($response);
