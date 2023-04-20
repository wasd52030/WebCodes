<?php
namespace App\Http\Controllers;

class ControllerSample extends Controller
{
    public function helloController()
    {
        return 'Hello  Controller';
    }

    public function hello($name)
    {
        return "Hello  $name";
    }

    public function add($a, $b)
    {
        return "A+B=" . intval($a) + intval($b);
    }

}
