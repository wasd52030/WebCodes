<?php

namespace app\Models;

use vendor\DataBase;

class ClassHomework
{

    public function __construct()
    {
        DataBase::Connect();
    }

    public function getClassHomeworks()
    {
        $sql = "SELECT * FROM chomework";
        $parmas = null;
        return DataBase::Select($sql, $parmas);
    }

    public function getClassHomework($ClassHomeworkId)
    {
        $sql = "SELECT * FROM chomework WHERE `id`=?";
        $parmas = array($ClassHomeworkId);
        return DataBase::Select($sql, $parmas);
    }

    public function getClassHomeworkByCid($Cid)
    {
        $sql = "SELECT chomework.*,cdata.Cname  FROM chomework JOIN cdata ON (chomework.Cid=cdata.Cid) WHERE chomework.Cid=?";
        $parmas = array($Cid);
        return DataBase::Select($sql, $parmas);
    }

    public function getClassHomeworkByTeacherid($teacherid)
    {
        $sql = "
            SELECT chomework.*,profile.name,cdata.Cname 
            FROM `chomework` JOIN (profile,cdata) 
            ON( 
                chomework.teacherid=profile.id 
                AND chomework.Cid=cdata.Cid 
            )
            where chomework.teacherid=?;
        ";
        $parmas = array($teacherid);
        return DataBase::Select($sql, $parmas);
    }

    public function newClassHomework($Cid, $Infomation, $teacherid)
    {
        $data = array($Cid, $Infomation, $teacherid);
        $sql = "INSERT INTO chomework (`id`, `Cid`, `Infomation`,`teacherid`) VALUES (null,?,?,?);";

        return DataBase::Insert($sql, $data);
    }

    public function removeClassHomework($id)
    {
        $data = array($id);
        $sql = "DELETE FROM chomework WHERE chomework.id= ?";
        return DataBase::Delete($sql, $data);
    }

    public function updateClassHomework($id, $Cid, $Infomation)
    {
        $data = array($Cid, $Infomation, $id);
        $sql = "UPDATE chomework SET Cid=?,Infomation=? WHERE chomework.id=?;";

        return DataBase::Update($sql, $data);
    }
}
