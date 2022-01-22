<?php

namespace app\Controllers;

use app\Models\HandHomework as HandHomeworkModel;
use vendor\Controller;

class HandHomework extends Controller
{
    private $m;
    public function __construct()
    {
        $this->m = new HandHomeworkModel();
    }

    public function getHandHomeworkList()
    {
        $Hid = $_POST["Hid"];
        $Sid = $_POST["Sid"];
        return $this->m->getHandHomeworkList($Hid, $Sid);
    }

    public function getHomeworkFile()
    {
        $Hid = $_GET["Hid"];
        $filename = $_GET["filename"];
        $filepath = sprintf("%s/../files/HandHomework", __DIR__);
        $res = $this->m->getHandHomeworkFileName($filename);

        if ($res["status"] = 200) {
            $serverFile = $res["result"][0]["HomeworkFile"];
            $ServerFilePath = sprintf("%s/%s", $filepath, $serverFile);

            if (file_exists($ServerFilePath)) {
                $res['message'] = '下載成功';
                $res['filelink'] = "http://localhost/mvcfinal/Back/app/files/HandHomework/$serverFile";
            } else {
                $res['message'] = '檔案不存在';
            }
        } else {
            $res['message'] = '檔案不存在';
        }

        return $res;
    }

    public function newHandHomework()
    {
        $Hid = $_POST["Hid"];
        $Cid = $_POST["Cid"];
        $Sid = $_POST["Sid"];
        $file = $_FILES["data"];

        if ($file["error"] > 0) {
            return json_encode(array("err" => $file["error"]));
        } else {
            $filepath = sprintf("%s/../files/HandHomework", __DIR__);
            $ServerFilePath = sprintf("%s/%s", $filepath, $file["name"]);
            move_uploaded_file($file["tmp_name"], $ServerFilePath);
            $res = $this->m->gethandhomeworkList($Hid, $Sid);
            if (empty($res["result"])) {
                $res = $this->m->handin($Hid, $Cid, $Sid, $file["name"]);
            } else if (!empty($this->m->gethandhomeworkFileName($file["name"])["result"])) {
                $res = $this::res(204, "伺服器裡面已有檔名相同之檔案！，請重新命名之後上傳！");
            }else{
                $res = $this::res(204, "請將最近一次上傳之檔案刪除再行上傳！");
            }
            return $res;
        }
    }

    public function removeHomework()
    {
        $id = $_POST["id"];

        $res = $this->m->getHandHomeworkByID($id);
        if ($res["status"] == 200) {
            $serverFile = $res["result"][0]["HomeworkFile"];
            $filepath = sprintf("%s/../files/HandHomework", __DIR__);
            $ServerFilePath = sprintf("%s/%s", $filepath, $serverFile);
            if (file_exists($ServerFilePath)) {
                unlink($ServerFilePath);
                return $this->m->removehomework($id);
            } else {
                $res['message'] = '刪除失敗';
            }
        } else {
            $res['message'] = '刪除失敗';
        }
        return $res;
    }

    public function UpdatehomeworkScore()
    {
        $id = $_POST["id"];
        $HomeworkScore=$_POST["HomeworkScore"];
        return $this->m->UpdatehomeworkScore($id,$HomeworkScore);
    }
}
