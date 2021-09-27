<?php
class Rectangle{
    private $height, $width;
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