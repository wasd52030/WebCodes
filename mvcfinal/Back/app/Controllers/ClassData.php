<?php

namespace app\Controllers;

use vendor\Controller;
use app\Models\ClassData as ClassDataModel;

class ClassData extends Controller
{

    private $m;
    public function __construct()
    {
        $this->m = new ClassDataModel();
    }

    public function getClassDatas()
    {
        if (isset($_POST["Cid"])) {
            return $this->m->getClassData($_POST["Cid"]);
        } else {
            return $this->m->getClassDatas();
        }
    }
}
