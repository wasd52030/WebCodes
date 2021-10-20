<?php
require_once "./Rectangle.php";
require_once "./Circle.php";

class Controller
{
    public function Areas()
    {
        $w1 = $_POST["w1"];
        $h1 = $_POST["h1"];
        $r1 = $_POST["r"];
        $p = $_POST["p"];

        $a = new Rectangle($w1, $h1);
        $b = new Circle();
        $b->setRadius($r1);


        $res = array(
            "Status"=>200,
            "message"=>"success",
            "result"=>array(
                "Rectangle" => array(
                    "height" => $a->getHeight(),
                    "width" => $a->getWidth(),
                    "length" => $a->getLength(),
                    "area" => $a->getArea()
                ),
                "Circle" => array(
                    "radius" => $b->getRadius(),
                    "p" => $p,
                    "area" => $b->getArea(),
                    "Circumference" => $b->getCircumference()
                )
            ),
        );
        return json_encode($res);
    }
}
