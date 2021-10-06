<?php
require_once "./Rectangle.php";
$w1 = $_POST["w1"];
$h1 = $_POST["h1"];
$w2 = $_POST["w2"];
$h2 = $_POST["h2"];

$a=new Rectangle($w1,$h1);
$b=new Rectangle($w2,$h2);


$res=array("area1"=>$a->getArea(),"area2"=>$b->getArea());
echo json_encode($res);
