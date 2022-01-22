<?php

namespace app\Models;

use vendor\DataBase;

class ClassData
{

    public function __construct()
    {
        DataBase::Connect();
    }

    public function getClassDatas()
    {
        $sql = "
            SELECT Cid,Cname,Introduction,profile.name,weekday,lessonFrom,lessonTo,credit
            FROM cdata JOIN profile
            ON (cdata.teacherid=profile.id);
        ";
        $parmas = null;
        return DataBase::Select($sql, $parmas);
    }

    public function getClassName($name, $teacherid, $operation)
    {
        if ($operation == 1) {
            $sql = "SELECT Cname FROM `cdata` where Cname=? and teacherid=?";
            $parmas = array($name, $teacherid);
        } else {
            $sql = "SELECT Cname FROM `cdata` where Cname=? and teacherid!=?";
            $parmas = array($name, $teacherid);
        }
        return DataBase::Select($sql, $parmas);
    }

    public function AlreadyExists($teacherid, $weekday, $lessonFrom, $lessonTo, $operation)
    {
        if ($operation == "add") {
            $sql = '
            SELECT *
            FROM cdata 
            where 
            teacherid=?
            AND weekday=?
            AND (lessonFrom BETWEEN ? AND ? 
                 OR 
                 lessonTo BETWEEN ? AND ?);
            ';
            $parmas = array($teacherid, $weekday, $lessonFrom, $lessonTo, $lessonFrom, $lessonTo);
        } else {
            $sql = '
                SELECT *
                FROM cdata 
                where 
                teacherid=?
                AND weekday=?
                AND (lessonFrom BETWEEN ? AND ? 
                    OR 
                    lessonTo BETWEEN ? AND ?)
                AND Cid!=?;
            ';
            $parmas = array($teacherid, $weekday, $lessonFrom, $lessonTo, $lessonFrom, $lessonTo, $operation);
        }
        return DataBase::Select($sql, $parmas);
    }

    public function getClassData($Cid)
    {
        $sql = "SELECT * FROM `cdata` WHERE `Cid`=?";
        $parmas = array($Cid);
        return DataBase::Select($sql, $parmas);
    }

    public function getClasses($teacherid)
    {
        $sql = "SELECT * FROM `cdata` WHERE `teacherid`=?";
        $parmas = array($teacherid);
        return DataBase::Select($sql, $parmas);
    }

    public function newClassData($Cname, $Introduction, $teacher, $weekday, $lessonFrom, $lessonTo, $credit)
    {
        $data = array($Cname, $Introduction, $teacher, $weekday, $lessonFrom, $lessonTo, $credit);
        $sql = "INSERT INTO `cdata` (`Cid`, `Cname`, `Introduction`, `teacherid`, `weekday`, `lessonFrom`, `lessonTo`, `credit`) VALUES (null,?,?,?,?,?,?,?);";
        return DataBase::Insert($sql, $data);
    }

    public function removeClassData($Cid)
    {
        $data = array($Cid);
        $sql = "DELETE FROM cdata WHERE cdata.Cid=?;";
        return DataBase::Delete($sql, $data);
    }

    public function updateClassData($Cid, $Cname, $Introduction, $teacher, $weekday, $lessonFrom, $lessonTo, $credit)
    {
        $data = array($Cname, $Introduction, $weekday, $lessonFrom, $lessonTo, $credit, $Cid, $teacher);
        $sql = "UPDATE cdata SET Cname=?,Introduction= ?,weekday=?,lessonFrom=?,lessonTo=?,credit=? WHERE Cid= ? and teacherid=?;";

        return DataBase::Update($sql, $data);
    }
}
