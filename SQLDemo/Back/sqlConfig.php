<?php
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
            $response['status']=200;
            $response['result']=$conn;
        } 
        catch (PDOException $e) 
        {        
            $response['status']=$e->getCode();
            $response['message']=$e->getMessage;
        }
        return $response;
    }
?>