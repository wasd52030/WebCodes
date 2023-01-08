<?php
if (isset($_GET['action'])) {
    $act = $_GET['action'];
} else {
    $act = "NONE";
}

function SqlConnect()
{
    $db_host='localhost';
    $db_name='n';
    $db_user='a';
    $db_pwd='123456';
    $dsn="mysql:host=$db_host;dbname=$db_name;charest=utf8";
    try 
    {
        $conn=new PDO($dsn,$db_user,$db_pwd);
        $res['status']=200;
        $res['result']=$conn;
    } 
    catch (PDOException $e) 
    {        
        $res['status']=$e->getCode();
        $res['message']=$e->getMessage();
    }
    return $res;
}

$db = SqlConnect();
switch ($act) {
    case 'reg':
        $name = $_POST["name"];
        $account = $_POST["account"];
        $password = $_POST["password"];

        $data=array($name,$account,$password);
        if ($db['status']==200) {
            try {
                $conn = $db['result'];
                $sql = "INSERT INTO account (UserID,name, account,PassWord) VALUES (NULL,?, ?, ?)";
                //prepare => 檢查sql statement的安全性，參數為要執行的sql statement
                $stmt = $conn->prepare($sql);
                //execute => 執行sql statement，參數為一Array，順序為在sql statement中的 ? 所代表的參數的順序
                $result = $stmt->execute($data);
    
                if ($result) {
                    //rowCount => 回傳執行sql statement後所影響的行數
                    $count = $stmt->rowCount();
                    if ($count < 1) {
                        $res['status'] = 204;
                        $res['message'] = '新增失敗';
                    } else {
                        $res['status'] = 200;
                        $res['message'] = '新增成功';
                    }
                } else {
                    $res['status'] = 400;
                    $res['message'] = 'SQL ERROR';
                }
            } catch (PDOException $e) {
                $res['status'] = $e->getCode();
                $res['message'] = $e->getMessage();
            }
        }
        break;

    case 'log':
        if ($db['status']==200) {
            try {
                $conn = $db['result'];
                $sql = "INSERT INTO login_info (id,user, time) VALUES (NULL,?, ?)";
                $stmt = $conn->prepare($sql);
                $result = $stmt->execute(array($_POST["user"],$_POST["time"]));
    
                if ($result) {
                    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    $res['status'] = 200;
                    $res['message'] = '紀錄成功';
                    $res['data'] = $rows;
                } else {
                    $res['status'] = 400;
                    $res['message'] = 'SQL ERROR';
                }
            } catch (PDOException $e) {
                $res['status'] = $e->getCode();
                $res['message'] = $e->getMessage();
            }
        }
        break;
    case 'login':
        if ($db['status']==200) {
            try {
                $conn = $db['result'];
                $sql = "SELECT name FROM `account` WHERE `account`=? and `PassWord`=?";
                $stmt = $conn->prepare($sql);
                $result = $stmt->execute(array($_POST["account"],$_POST["password"]));
    
                if ($result) {
                    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    $res['status'] = 200;
                    $res['message'] = '登入成功';
                    $res['data'] = $rows;
                } else {
                    $res['status'] = 400;
                    $res['message'] = 'SQL ERROR';
                }
            } catch (PDOException $e) {
                $res['status'] = $e->getCode();
                $res['message'] = $e->getMessage();
            }
        }
        break;
    case 'get_accounts':
        if ($db['status']==200) {
            try {
                $conn = $db['result'];
                $sql = "SELECT  *  FROM  `account`";
                $stmt = $conn->prepare($sql);
                $result = $stmt->execute();
    
                if ($result) {
                    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    $res['status'] = 200;
                    $res['message'] = '查詢成功';
                    $res['data'] = $rows;
                } else {
                    $res['status'] = 400;
                    $res['message'] = 'SQL ERROR';
                }
            } catch (PDOException $e) {
                $res['status'] = $e->getCode();
                $res['message'] = $e->getMessage();
            }
        }
        break;
        case 'get_logs':
            if ($db['status']==200) {
                try {
                    $conn = $db['result'];
                    $sql = "SELECT  *  FROM  `login_info`";
                    $stmt = $conn->prepare($sql);
                    $result = $stmt->execute();
        
                    if ($result) {
                        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
                        $res['status'] = 200;
                        $res['message'] = '查詢成功';
                        $res['data'] = $rows;
                    } else {
                        $res['status'] = 400;
                        $res['message'] = 'SQL ERROR';
                    }
                } catch (PDOException $e) {
                    $res['status'] = $e->getCode();
                    $res['message'] = $e->getMessage();
                }
            }
            break;
}

echo json_encode($res);