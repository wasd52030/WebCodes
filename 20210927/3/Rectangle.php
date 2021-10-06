<?php
class Rectangle3{
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

    function getLength()
    {
        return ($this->height + $this->width)*2;
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