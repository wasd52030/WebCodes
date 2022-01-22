<?php

namespace app\Controllers;

use vendor\Controller;
use app\Models\Student as StudentModel;
use app\Models\CRecord as Record;

class Student extends Controller
{

    private $m,$r;
    public function __construct()
    {
        $this->m = new StudentModel();
        $this->r=new Record();
    }

    public function getChooseList()
    {
        $Sid = $_POST["Sid"];
        return $this->m->getChooseList($Sid);
    }

    public function getChooseed()
    {
        $Sid = $_POST["Sid"];
        return $this->m->getChooseed($Sid);
    }

    public function removeChoose()
    {
        $Sid = $_POST["Sid"];
        $Cid = $_POST["Cid"];

        $this->r->removeRecord($Cid, $Sid);
        return $this->m->removeChoose($Cid, $Sid);
    }



    public function ChooseClass()
    {
        $Sid = $_POST["Sid"];
        $Cid = $_POST["Cid"];
        if (!empty($this->m->AlreadyExist($Sid, $Cid)["result"])) {
            return $this::res(204, "衝堂！");
        } else {
            $this->r->newRecord($Sid, $Cid);
            return $this->m->ChooseClass($Sid, $Cid);
        }
    }

    public function getTranscript(){
        $Sid=$_POST["Sid"];
        return $this->m->getTranscript($Sid);
    }
}
