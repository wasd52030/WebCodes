<?php
require_once "./Rectangle.php";

$a=new Rectangle(15,14);
echo sprintf("Area：%d \n",$a->getArea());
echo sprintf("Length：%d \n\n",$a->getLength());

$b=new Rectangle(74,39);
echo sprintf("Area：%d \n",$b->getArea());
echo sprintf("Length：%d \n\n",$b->getLength());

$c=new Rectangle(45,16);
echo sprintf("Area：%d \n",$c->getArea());
echo sprintf("Length：%d \n\n",$c->getLength());

