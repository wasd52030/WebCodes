<?php
require "sql.php";

$filename = $_POST["filename"];
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
    unlink($ServerFilePath);
    if ($res['status'] == 200) {
        try {
            $conn = $res['result'];
            $sql = "DELETE FROM files WHERE files.filename = ?";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute(array($serverFile));

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
} else {
    $response['message'] = '刪除失敗';
}

echo json_encode($response);
