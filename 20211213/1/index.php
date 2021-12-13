<?php
require_once "./autoload.php";

use A\sub\MyClass as A;
use B\sub\MyClass as B;

$c1=new A();
$c2=new B();

$c1->f();
$c2->f();