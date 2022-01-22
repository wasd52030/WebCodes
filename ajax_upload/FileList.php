<?php
require_once 'sql.php';



$res = SqlConnect();
if ($res['status'] == 200) {
    try {
        $conn = $res['result'];
        $sql = "SELECT  *  FROM  `files`";
        $stmt = $conn->prepare($sql);
        $result = $stmt->execute();

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
    echo json_encode($response);
}
