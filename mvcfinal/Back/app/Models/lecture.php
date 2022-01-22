<?php

namespace app\Models;

use vendor\DataBase;

class lecture
{
    public function __construct()
    {
        DataBase::Connect();
    }

    public function getlectureByID($id)
    {
        $sql = "SELECT * FROM `clecture` WHERE id=?";
        $parmas = array($id);
        return DataBase::Select($sql, $parmas);
    }

    public function getlectureList($Cid)
    {
        $sql = "
            SELECT clecture.*,cdata.Cname 
            FROM `clecture` JOIN cdata ON (clecture.Cid=cdata.Cid)
            WHERE cdata.Cid=?;
        ";
        $parmas = array($Cid);
        return DataBase::Select($sql, $parmas);
    }

    public function getlectureFileName($lectureFile)
    {
        $sql = "SELECT * FROM `clecture` WHERE lectureFile=?";
        $parmas = array($lectureFile);
        return DataBase::Select($sql, $parmas);
    }

    public function getlecture($teacherid)
    {
        $sql = "SELECT clecture.*,cdata.Cname 
                FROM `clecture` JOIN cdata ON clecture.Cid=cdata.Cid 
                WHERE clecture.teacherid=?";
        $parmas = array($teacherid);
        return DataBase::Select($sql, $parmas);
    }

    public function newlecture($Cid, $lectureFile, $teacherid)
    {
        $data = array($Cid, $teacherid, $lectureFile);
        $sql = "INSERT INTO `clecture` (`id`, `Cid`, `teacherid`, `lectureFile`) VALUES (null,?,?,?);";
        return DataBase::Insert($sql, $data);
    }

    public function removelecture($id)
    {
        $data = array($id);
        $sql = "DELETE FROM clecture WHERE clecture.id = ?";
        return DataBase::Delete($sql, $data);
    }

    public function Updatelecture($id, $Cid, $teacherid, $lectureFile)
    {
        $data = array($Cid, $lectureFile, $id, $teacherid);
        $sql = "UPDATE  clecture SET Cid=?,lectureFile= ? WHERE id= ? and teacherid=?;";

        return DataBase::Update($sql, $data);
    }
}
