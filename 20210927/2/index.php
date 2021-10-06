<?php
class Rectangle2{
    var $height, $width;
    public function __construct($height, $width)
    {
        $this->height = $height;
        $this->width = $width;
    }

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

$a=new Rectangle2(4,9);
echo "Rectangle a\n";
echo sprintf("Area：%d \n",$a->getArea());

$b=new Rectangle2(8,14);
echo "Rectangle b\n";
echo sprintf("Area：%d \n",$b->getArea());

$c=new Rectangle2(23,14);
echo "Rectangle c\n";
echo sprintf("Area：%d \n",$c->getArea());