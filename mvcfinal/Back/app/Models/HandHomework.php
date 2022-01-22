<?php

namespace app\Models;

use vendor\DataBase;

class HandHomework
{
    public function __construct()
    {
        DataBase::Connect();
    }

    public function gethandhomeworkByID($id)
    {
        $sql = "SELECT * FROM `handhomework` WHERE id=?";
        $parmas = array($id);
        return DataBase::Select($sql, $parmas);
    }

    public function gethandhomeworkByCID($Cid)
    {
        $sql = "SELECT handhomework.*,
                profile.name,
                chomework.Infomation
                FROM handhomework 
                JOIN (profile,chomework) 
                ON (
                    handhomework.Sid=profile.id
                    and handhomework.Hid=chomework.id
                ) 
                WHERE handhomework.Cid=?;";
        $parmas = array($Cid);
        return DataBase::Select($sql, $parmas);
    }

    public function gethandhomeworkByHID($id)
    {
        $sql = "SELECT * FROM `handhomework` WHERE id=?";
        $parmas = array($id);
        return DataBase::Select($sql, $parmas);
    }

    public function gethandhomeworkList($Hid, $Sid)
    {
        $sql = "
        SELECT handhomework.*,cdata.Cname,chomework.Infomation
        FROM `handhomework` JOIN (cdata,chomework) 
        ON (
            handhomework.Cid=cdata.Cid
            and handhomework.Hid=chomework.id
        )
        WHERE handhomework.Hid=? AND handhomework.Sid=?;
        ";
        $parmas = array($Hid, $Sid);
        return DataBase::Select($sql, $parmas);
    }

    public function gethandhomeworkFileName($handhomeworkFile)
    {
        $sql = "SELECT * FROM `handhomework` WHERE HomeworkFile=?";
        $parmas = array($handhomeworkFile);
        return DataBase::Select($sql, $parmas);
    }

    public function handin($Hid, $Cid, $Sid, $handhomeworkFile)
    {
        $data = array($Hid, $Cid, $Sid, $handhomeworkFile);
        $sql = "INSERT INTO `handhomework` (`id`, `Hid`, `Cid`, `Sid`, `HomeworkFile`, `HomeworkScore`) VALUES (null,?,?,?,?,'0');";
        return DataBase::Insert($sql, $data);
    }

    public function removehomework($id)
    {
        $data = array($id);
        $sql = "DELETE FROM handhomework WHERE handhomework.id = ?";
        return DataBase::Delete($sql, $data);
    }

    public function UpdatehomeworkScore($id,$HomeworkScore)
    {
        $data = array($HomeworkScore,$id);
        $sql = "UPDATE  handhomework SET HomeworkScore=? WHERE id= ?;";

        return DataBase::Update($sql, $data);
    }
}
