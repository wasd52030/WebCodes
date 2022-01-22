<?php

namespace app\Controllers;

use app\Models\ClassData as ClassDataModel;
use app\Models\HandHomework as SHomeworkModel;
use app\Models\CRecord as Record;
use vendor\Controller;

class Teacher extends Controller
{
    private $m, $Stm, $r;
    public function __construct()
    {
        $this->m = new ClassDataModel();
        $this->Stm = new SHomeworkModel();
        $this->r = new Record();
    }

    public function getClasses()
    {
        $teacherid = $_POST["teacherid"];
        return $this->m->getClasses($teacherid);
    }

    public function newClassData()
    {
        $Cname = $_POST['Cname'];
        $Introduction = $_POST['Introduction'];
        $teacherid = $_POST['teacherid'];
        $weekday = $_POST['weekday'];
        $lessonFrom = $_POST['lessonFrom'];
        $lessonTo = $_POST['lessonTo'];
        $credit = $_POST['credit'];

        if (!empty($this->m->getClassName($Cname, $teacherid, 1)["result"])) {
            return $this::res(204, "課程名稱重複！");
        } else if (!empty($this->m->AlreadyExists($teacherid, $weekday, $lessonFrom, $lessonTo, "add")["result"])) {
            return $this::res(204, "衝堂！");
        } else {
            return $this->m->newClassData($Cname, $Introduction, $teacherid, $weekday, $lessonFrom, $lessonTo, $credit);
        }
    }

    public function removeClassData()
    {
        $Cid = $_POST['Cid'];
        return $this->m->removeClassData($Cid);
    }

    public function updateClassData()
    {
        $Cid = $_POST['Cid'];
        $Cname = $_POST['Cname'];
        $Introduction = $_POST['Introduction'];
        $teacherid = $_POST['teacherid'];
        $weekday = $_POST['weekday'];
        $lessonFrom = $_POST['lessonFrom'];
        $lessonTo = $_POST['lessonTo'];
        $credit = $_POST['credit'];

        if (!empty($this->m->getClassName($Cname, $teacherid, 2)["result"])) {
            return $this::res(204, "課程名稱重複！");
        } else if (!empty($this->m->AlreadyExists($teacherid, $weekday, $lessonFrom, $lessonTo, $Cid)["result"])) {
            return $this::res(204, "衝堂！");
        } else {
            return $this->m->updateClassData($Cid, $Cname, $Introduction, $teacherid, $weekday, $lessonFrom, $lessonTo, $credit);
        }
    }

    public function getClassHomework()
    {
        return $this->Stm->gethandhomeworkByCID($_POST["Cid"]);
    }

    public function UpdateMidtern()
    {
        $id = $_POST['id'];
        $Mid = $_POST['Mid'];
        return $this->r->UpdateMidtern($id, $Mid);
    }

    public function UpdateFinal()
    {
        $id = $_POST['id'];
        $Fin = $_POST['Fin'];
        return $this->r->UpdateFinal($id, $Fin);
    }

    public function gerRecordsByCid()
    {
        $Cid = $_POST['Cid'];
        return $this->r->gerRecordsByCid($Cid);
    }
}
