<?php
require_once ("./Rectangle.php");

$a=new Rectangle(12,14);
echo sprintf("%d <br>",$a->getArea());

$b=new Rectangle(4,9);
echo sprintf("%d <br>",$b->getArea());

$c=new Rectangle(5,16);
echo sprintf("%d <br>",$c->getArea());
?>
