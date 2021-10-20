<?php
class Circle
{
    private $radius;

    public function __construct($r = null)
    {
        $this->radius = $r;
    }

    public function setRadius($r)
    {
        $this->radius = (is_numeric($r)) ? $r  :  0;
    }

    public function getRadius()
    {
        return $this->radius;
    }

    public function getArea()
    {
        return $this->radius * $this->radius * pi();
    }

    public function getCircumference() //圓周長
    {
        return 2 * pi() * $this->radius;
    }
}
