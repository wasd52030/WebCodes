<?php
    $chi=$_POST['chi'];
    $eng=$_POST['eng'];
    $math=$_POST['math'];
    $avg=($chi+$eng+$math)/3;
    $res=json_encode($avg);
    echo $res;
?>
    
