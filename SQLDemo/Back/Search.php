<?php

    require_once 'sqlConfig.php';
    $res=SqlConnect();
    $id=$_POST['id'];

    if($res['status']==200)
    {
        try
        {
            $conn=$res['result'];
            $sql="SELECT * FROM x WHERE ID= ?";
            //prepare => 檢查sql statement的安全性，參數為要執行的sql statement
            $stmt=$conn->prepare($sql);
            //execute => 執行sql statement，參數為一Array，順序為在sql statement中的 ? 所代表的參數的順序
            $result=$stmt->execute(array($id));
    
            if($result)
            {
                //fetchAll(PDO::FETCH_ASSOC) => 將執行sql statement後的結果以{key:value}對回傳
                $rows=$stmt->fetchAll(PDO::FETCH_ASSOC);
                $response['status']=200;
                $response['message']='查詢成功';
                $response['result']=$rows;
                
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
            $response['message']=$e->getMessage();
        }
        
        echo json_encode($response);
    }

?>