<?php
class Router
{
    private $RouteTable;

    public function __construct()
    {
        $this->RouteTable = array();
    }

    public function Register($action, $class, $method)
    {
        $arr['class'] = $class;
        $arr['method'] = $method;
        $this->RouteTable[$action] = $arr;
    }

    public function run($action)
    {
        $class = $this->RouteTable[$action]['class'];
        $method = $this->RouteTable[$action]['method'];
        require_once "./Controllers/{$class}.php";
        $controller = new $class();
        $res = $controller->$method();
        return $res;
    }
}
