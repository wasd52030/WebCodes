<?php
require_once "./Rectangle.php";

$a=new Rectangle3(15,14);
echo "Rectangle a\n";
echo sprintf("Area：%d \n",$a->getArea());
echo sprintf("Length：%d \n\n",$a->getLength());

$b=new Rectangle3(74,39);
echo "Rectangle b\n";
echo sprintf("Area：%d \n",$b->getArea());
echo sprintf("Length：%d \n\n",$b->getLength());

$c=new Rectangle3(45,16);
echo "Rectangle c\n";
echo sprintf("Area：%d \n",$c->getArea());
echo sprintf("Length：%d \n\n",$c->getLength());

