<?php

namespace app\Controllers;

use app\Models\lecture as lectureModel;
use vendor\Controller;

class lecture extends Controller
{
    private $m;
    public function __construct()
    {
        $this->m = new lectureModel();
    }

    public function getlectureList()
    {
        if (isset($_POST["Cid"])) {
            $Cid = $_POST["Cid"];
            return $this->m->getlectureList($Cid);
        } else if (isset($_POST["teacherid"])) {
            $teacherid = $_POST["teacherid"];
            return $this->m->getlecture($teacherid);
        }
    }

    public function getlectureFile()
    {
        $filename = $_GET["filename"];
        $filepath = sprintf("%s/../files/lecture", __DIR__);
        $res = $this->m->getlectureFileName($filename);

        if ($res["status"] = 200) {
            $serverFile = $res["result"][0]["lectureFile"];
            $ServerFilePath = sprintf("%s/%s", $filepath, $serverFile);

            if (file_exists($ServerFilePath)) {
                $res['message'] = '下載成功';
                $res['filelink'] = "http://localhost/mvcfinal/Back/app/files/lecture/$serverFile";
            } else {
                $res['message'] = '檔案不存在';
            }
        } else {
            $res['message'] = '檔案不存在';
        }

        return $res;
    }

    public function newlecture()
    {
        $Cid = $_POST["Cid"];
        $file = $_FILES["data"];
        $teacherid = $_POST["teacherid"];

        if ($file["error"] > 0) {
            return json_encode(array("err" => $file["error"]));
        } else {
            $filepath = sprintf("%s/../files/lecture", __DIR__);
            $ServerFilePath = sprintf("%s/%s", $filepath, $file["name"]);
            move_uploaded_file($file["tmp_name"], $ServerFilePath);
            $res = $this->m->getlectureFileName($file["name"]);
            if (empty($res["result"])) {
                $res = $this->m->newlecture($Cid, $file["name"], $teacherid);
            } else {
                $res = $this::res(200, "ok", "write ok");
            }
            return $res;
        }
    }

    public function removelecture()
    {
        $id = $_POST["id"];

        $res = $this->m->getlectureByID($id);
        if ($res["status"] == 200) {
            $serverFile = $res["result"][0]["lectureFile"];
            $filepath = sprintf("%s/../files/lecture", __DIR__);
            $ServerFilePath = sprintf("%s/%s", $filepath, $serverFile);
            if (file_exists($ServerFilePath)) {
                unlink($ServerFilePath);
                return $this->m->removelecture($id);
            } else {
                $res['message'] = '刪除失敗';
            }
        } else {
            $res['message'] = '刪除失敗';
        }
        return $res;
    }

    public function updatelecture()
    {
        $Cid = $_POST["Cid"];
        $file = $_FILES["data"];
        $res = $this->m->getlectureList($Cid);

        if ($file["error"] > 0) {
            return json_encode(array("err" => $file["error"]));
        } else {
            $filepath = sprintf("%s/../files/lecture", __DIR__);
            $ServerFilePath = sprintf("%s/%s", $filepath, $file["name"]);
            if (file_exists($ServerFilePath)) {
                unlink($ServerFilePath);
            }
            move_uploaded_file($file["tmp_name"], $ServerFilePath);
            return $this->m->updatelecture($res["result"][0]['id'], $Cid, $res["result"][0]["teacherid"], $file["name"]);
        }
    }
}
