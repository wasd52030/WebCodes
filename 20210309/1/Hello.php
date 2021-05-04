<?php
    $name=$_POST["name"];
    $message="^ == >" . $name;
    $msg_json=json_encode($message);
    echo $msg_json;
?>