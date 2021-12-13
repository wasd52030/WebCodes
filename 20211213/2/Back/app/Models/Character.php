<?php

namespace app\Models;

use vendor\Controller;
use vendor\DataBase;

class Character extends Controller
{

    public function __construct()
    {
        DataBase::Connect();
    }

    function check($name = null, $id = null, $action = null)
    {
        if ($action == "add") {
            $sql = "SELECT * FROM `characters` WHERE characters.name=?";
            $parmas = array($name);
            $result = DataBase::Select($sql, $parmas);

            if ($result) {
                return (count($result["result"]) < 1) ? true : false;
            }
        } elseif ($action == "update") {
            $sql = "SELECT * FROM `characters` WHERE characters.name=? AND characters.id!=?";
            $parmas = array($name, $id);
            $result = DataBase::Select($sql, $parmas);

            if ($result) {
                return (count($result["result"]) < 1) ? true : false;
            }
        }
    }

    public function getCharacters()
    {
        $sql = "SELECT * FROM `characters`";
        $parmas = null;

        return DataBase::Select($sql, $parmas);
    }

    public function getCharacter($id)
    {
        $sql = "SELECT * FROM `characters` WHERE `id`=?";
        $parmas = array($id);

        return DataBase::Select($sql, $parmas);
    }

    public function newCharacter($name)
    {

        $sql = "INSERT INTO `characters` (`id`, `name`) VALUES (NULL,?);";
        $data = array($name);

        return DataBase::Insert($sql, $data);
    }

    public function removeCharacter($id)
    {
        $data = array($id);
        $sql = "DELETE FROM `characters` WHERE `characters`.`id` = ?";

        return DataBase::Delete($sql, $data);
    }

    public function updateCharacter($id, $name)
    {

        $data = array($name, $id);
        $sql = "UPDATE `characters` SET `name` = ? WHERE `characters`.`id` = ?;";
        return DataBase::Update($sql, $data);
    }
}
