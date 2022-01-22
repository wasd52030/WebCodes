<?php
require "sql.php";

$filename = $_GET["filename"];
$filepath = "files/";

$res = SqlConnect();
if ($res['status'] == 200) {
    try {
        $conn = $res['result'];
        $sql = "SELECT  *  FROM  `files` where `filename`=?";
        $stmt = $conn->prepare($sql);
        $result = $stmt->execute(array($filename));

        if ($result) {
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
}

$serverFile = $response["result"][0]["filename"];
$ServerFilePath = sprintf("%s/%s", $filepath, $serverFile);
$ServerFileSize = filesize($ServerFilePath);

if (file_exists($ServerFilePath)) {
    header('Content-Type: application');
    header('Content-Length: ' . $ServerFileSize);
    header('Content-Disposition: attachment; filename="' . $serverFile . '";');
    readfile($ServerFilePath);

    $response['message'] = '下載成功';
} else {
    $response['message'] = '下載失敗';
}

echo json_encode($response);
