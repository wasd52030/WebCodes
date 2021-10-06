<?php
$w1 = $_POST["w1"];
$h1 = $_POST["h1"];
$w2 = $_POST["w2"];
$h2 = $_POST["h2"];

function area($w, $h)
{
    return $w * $h;
}

$res=array("area1"=>area($w1,$h1),"area2"=>area($w2,$h2));
echo json_encode($res);
