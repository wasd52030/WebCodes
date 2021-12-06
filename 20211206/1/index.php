<?php
require_once "./A/sub/MyClass.php";
require_once "./B/sub/MyClass.php";

$c1 = new A\sub\MyClass();
$c2=new B\sub\MyClass();
$c1->f();
$c2->f();