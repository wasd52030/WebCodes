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
        $res = array(
            "Status"=>200,
            "message"=>"success",
            "result"=>array(
                "Circle" => $this->radius * $this->radius * pi()
            ),
        );
        return $res;
    }

    public function getCircumference() //圓周長
    {
        $res = array(
            "Status"=>200,
            "message"=>"success",
            "result"=>array(
                "Circumference" => 2 * pi() * $this->radius
            ),
        );
        return $res;
    }
}
