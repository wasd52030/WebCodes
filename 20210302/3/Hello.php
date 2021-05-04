<?php
    $name=$_GET["name"];
    $message="你好，" . $name;
    $MsgToJson=json_encode($message);
    echo $MsgToJson
 ?>
    
