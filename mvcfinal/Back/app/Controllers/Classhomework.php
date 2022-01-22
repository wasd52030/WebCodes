<?php

namespace app\Controllers;

use vendor\Controller;
use app\Models\Classhomework as ClasshomeworkModel;

class Classhomework extends Controller
{
    private $m;
    public function __construct()
    {
        $this->m = new ClasshomeworkModel();
    }

    public function getClasshomeworks()
    {
        if (isset($_POST["id"])) {
            return $this->m->getClasshomework($_POST["id"]);
        } else if (isset($_POST["Cid"])) {
            return $this->m->getClassHomeworkByCid($_POST["Cid"]);
        } else if (isset($_POST["teacherid"])) {
            return $this->m->getClassHomeworkByTeacherid($_POST["teacherid"]);
        }
    }

    public function newClasshomework()
    {
        $Cid = $_POST['Cid'];
        $teacherid = $_POST["teacherid"];
        $Infomation = $_POST['Infomation'];

        return $this->m->newClasshomework($Cid, $Infomation, $teacherid);
    }

    public function removeClasshomework()
    {
        return $this->m->removeClasshomework($_POST['id']);
    }


    public function updateClasshomework()
    {
        $id = $_POST['id'];
        $Cid = $_POST['Cid'];
        $Infomation = $_POST['Infomation'];

        return $this->m->updateClasshomework($id, $Cid, $Infomation);
    }
}
