<?php

    require_once 'sqlConfig.php';
    
    $id=$_POST['id'];
    $res=SqlConnect();
    if($res['status']==200)
    {
        try
        {   
            $conn=$res['result'];
            $sql="DELETE FROM x WHERE x.id = ?";
            //prepare => 檢查sql statement的安全性，參數為要執行的sql statement
            $stmt=$conn->prepare($sql);
            //execute => 執行sql statement，參數為一Array，順序為在sql statement中的 ? 所代表的參數的順序
            $result=$stmt->execute(array($id));

            if($result)
            {
                $response['status']=200;
                $response['message']='刪除成功';
            }
            else 
            {
                $response['status']=400;
                $response['message']='SQL ERROR';
            }
        } 
        catch (PDOException $e) 
        {
            $response['status']=$e->getCode();
            $response['message']=$e->getMessage;
        }
        echo json_encode($response);
    }
?>