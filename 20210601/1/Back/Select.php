<?php
    require_once 'sqlConfig.php';
    $res=SqlConnect();
    
    if($res['status']==200)
    {
        try
        {   
            $conn=$res['result'];
            if (isset($_POST['id'])) {
                $id=$_POST['id'];
                $sql="SELECT * FROM `x` WHERE `id`=?";
                $stmt=$conn->prepare($sql);
                $result=$stmt->execute(array($id));
            } else {
                $sql = "SELECT  *  FROM  `x`";
                $stmt=$conn->prepare($sql);
                $result=$stmt->execute();
            }
            
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
            $response['message']=$e->getMessage;
        }
        echo json_encode($response);
    }
