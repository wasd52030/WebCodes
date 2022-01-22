<?php

namespace app\Models;

use vendor\DataBase;

class Student
{
    public function __construct()
    {
        DataBase::Connect();
    }

    public function getChooseList($Sid)
    {
        $sql = "
            SELECT cdata.Cid,
                   cdata.Cname,
                   cdata.Introduction,
                   profile.name as teacher,
                   cdata.weekday,
                   cdata.lessonFrom,
                   cdata.lessonTo,
                   cdata.credit
            FROM cdata JOIN (profile) ON (cdata.teacherid=profile.id)
            WHERE cdata.Cid NOT IN (
                SELECT cchoose.Cid FROM cchoose WHERE cchoose.Sid=?
            );
        ";
        $parmas = array($Sid);
        return DataBase::Select($sql, $parmas);
    }

    public function getChooseed($Sid)
    {
        $sql = "
            SELECT cdata.Cid,
                   cdata.Cname,
                   cdata.Introduction,
                   profile.name as teacher,
                   cdata.teacherid,
                   cdata.weekday,
                   cdata.lessonFrom,
                   cdata.lessonTo,
                   cdata.credit
            FROM cdata JOIN (profile) ON (cdata.teacherid=profile.id)
            WHERE cdata.Cid IN (
                SELECT cchoose.Cid FROM cchoose WHERE cchoose.Sid=?
            );
        ";
        $parmas = array($Sid);
        return DataBase::Select($sql, $parmas);
    }

    public function AlreadyExist($Sid, $Cid)
    {
        $AlreadyExist = '
                SELECT *
                FROM cdata JOIN(
                    SELECT * FROM cdata where Cid IN( SELECT Cid FROM cchoose WHERE cchoose.Sid=? )
                ) u
                WHERE cdata.weekday=u.weekday
                AND (cdata.lessonFrom BETWEEN u.lessonFrom AND u.lessonFrom 
                    OR 
                    cdata.lessonTo BETWEEN u.lessonFrom AND u.lessonFrom)
                AND cdata.Cid=?;
            ';
        return DataBase::Select($AlreadyExist, array($Sid, $Cid));
    }

    public function ChooseClass($Sid, $Cid)
    {
        $sql = "INSERT INTO `cchoose` (`id`, `Sid`, `Cid`) VALUES (NULL, ?, ?)";
        $args = array($Sid, $Cid);
        return DataBase::Insert($sql, $args);
    }

    public function removeChoose($Cid, $Sid)
    {
        $data = array($Cid, $Sid);
        $sql = "DELETE FROM cchoose WHERE cchoose.Cid=? and cchoose.Sid=?;";
        return DataBase::Delete($sql, $data);
    }

    public function getTranscript($Sid)
    {
        $sql="
            SELECT cdata.Cname,AVG(handhomework.HomeworkScore) as Havg,crecord.Midtern,crecord.Final
            FROM cdata JOIN (handhomework,crecord,profile)
            ON(
                cdata.Cid=handhomework.Cid
                AND crecord.Cid=cdata.Cid
                AND profile.id=crecord.Sid
            )
            WHERE crecord.Sid=?
            GROUP BY cdata.Cid;
        ";
        $parmas = array($Sid);
        return DataBase::Select($sql, $parmas);
    }
}
