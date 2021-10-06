<?php
class Rectangle1
{
    var $width, $height;
    function getArea()
    {
        return $this->height * $this->width;
    }

    function getWidth()
    {
        return $this->width;
    }

    function getHeight()
    {
        return $this->height;
    }
}


$a=new Rectangle1();
$a->height=4;
$a->width=4;
echo "Rectangle a\n";
echo sprintf("Area：%d \n",$a->getArea());

$b=new Rectangle1();
$b->height=2;
$b->width=9;
echo "Rectangle b\n";
echo sprintf("Area：%d \n",$b->getArea());

$c=new Rectangle1();
$c->height=7;
$c->width=15;
echo "Rectangle c\n";
echo sprintf("Area：%d \n",$c->getArea());
