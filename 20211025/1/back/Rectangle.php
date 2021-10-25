<?php
class Rectangle
{
    private $height, $width;
    public function __construct($height = null, $width = null)
    {
        $this->height = $height;
        $this->width = $width;
    }

    public function setWidth($w)
    {
        $this->width = (is_numeric($w)) ?  $w :  0;
    }

    public function getWidth()
    {
        return $this->width;
    }

    public function setHeight($h)
    {
        $this->height = (is_numeric($h)) ?  $h : 0;
    }

    public function getHeight()
    {
        return $this->height;
    }

    public function getArea()
    {
        $res = array(
            "Status"=>200,
            "message"=>"success",
            "result"=>array(
                "Rectangle" => $this->height * $this->width
            ),
        );
        return $res;
    }

    public function getLength()
    {
        return ($this->height + $this->width) * 2;
    }
}
