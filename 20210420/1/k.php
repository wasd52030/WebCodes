<?php
    
    $db_host='localhost';
    $db_name='n';
    $db_user='a';
    $db_pwd='123456';
    $dsn="mysql:host=$db_host;dbname=$db_name;charest=utf8";

    $id=$_POST['id'];
    $name=$_POST['name'];
    $addr=$_POST['addr'];
    $birth=$_POST['birth'];
    try 
    {
        $conn=new PDO($dsn,$db_user,$db_pwd);
        $sql="INSERT INTO `x`(`id`, `name`, `addr`, `birth`) VALUES (?,?,?,?)";
        $stmt=$conn->prepare($sql);
        $result=$stmt->execute(array($id,$name,$addr,$birth));
        if($result)
        {
            $count=$stmt->rowCount();
            if($count<1)
            {
                $response['status']=400;
                $response['message']='新增失敗';
                
            }
            else 
            {
                $response['status']=200;
                $response['message']="新增成功";
            }
        }
        else
        {
            $response['status']=400;
            $response['message']="SQL錯誤";
        }
    } 
    catch (PDOException $e) 
    {
        $response['status']=$e->getCode();
        $response['message']=$e->getMessage();
    }
    echo json_encode($response);
?>