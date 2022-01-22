<?php

namespace app\Models;

use vendor\DataBase;

class CRecord
{
    public function __construct()
    {
        DataBase::Connect();
    }

    public function gerRecords()
    {
        $sql = "SELECT * FROM crecord";
        $parmas = null;
        return DataBase::Select($sql, $parmas);
    }

    public function gerRecordsByCid($Cid)
    {
        $sql = "SELECT crecord.*,
                       profile.name 
                FROM crecord 
                JOIN profile ON crecord.Sid=profile.id 
                where Cid=?;";
        $parmas = array($Cid);
        return DataBase::Select($sql, $parmas);
    }

    public function gerRecordsBySid()
    {
        $sql = "SELECT * FROM crecord where Sid=?";
        $parmas = null;
        return DataBase::Select($sql, $parmas);
    }

    public function newRecord($Cid, $Sid)
    {
        $data = array($Sid, $Cid);
        $sql = "INSERT INTO crecord (`id`, `Cid`, `Sid`,`Midtern`,`Final`) VALUES (null,?,?,'0','0');";

        return DataBase::Insert($sql, $data);
    }

    public function removeRecord($Cid, $Sid)
    {
        $data = array($Cid, $Sid);
        $sql = "DELETE FROM crecord WHERE crecord.Cid= ? and crecord.Sid= ?";
        return DataBase::Delete($sql, $data);
    }

    public function UpdateMidtern($id, $Mid)
    {
        $data = array($Mid, $id);
        $sql = "UPDATE  crecord SET Midtern=? WHERE id= ?;";

        return DataBase::Update($sql, $data);
    }

    public function UpdateFinal($id, $Fin)
    {
        $data = array($Fin, $id);
        $sql = "UPDATE  crecord SET Final=? WHERE id= ?;";

        return DataBase::Update($sql, $data);
    }
}
