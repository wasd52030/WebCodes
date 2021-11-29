<?php
require_once sprintf("%s/../../vendor/DataBase.php", __DIR__);
require_once sprintf("%s/../../vendor/Controller.php", __DIR__);

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
            $sql = "SELECT * FROM `characters` WHERE characters.id!=?";
            $parmas = array($id);
            $result = DataBase::Select($sql, $parmas);

            if ($result) {
                $flag = true;
                foreach ($result["result"] as $i) {
                    if ($name == $i["name"]) {
                        $flag = false;
                        break;
                    }
                }
                return $flag;
            }
        }
    }

    public function getCharacters()
    {
        if (isset($_POST["id"])) {
            $id = $_POST["id"];
            $sql = "SELECT * FROM `characters` WHERE `id`=?";
            $parmas = array($id);
        } else {
            $sql = "SELECT * FROM `characters`";
            $parmas = null;
        }
        return DataBase::Select($sql, $parmas);
    }

    public function newCharacter()
    {
        if ($this->check($_POST['name'], 0, "add")) {
            $name = $_POST['name'];

            $data = array($name);
            $sql = "INSERT INTO `characters` (`id`, `name`) VALUES (NULL,?);";

            return DataBase::Insert($sql, $data);
        } else {
            return $this->res(400, "名稱重複");
        }
    }

    public function removeCharacter()
    {
        $id = $_POST['id'];

        $data = array($id);
        $sql = "DELETE FROM `characters` WHERE `characters`.`id` = ?";

        return DataBase::Delete($sql, $data);
    }

    public function updateCharacter()
    {
        if ($this->check($_POST['name'], $_POST['id'], "update")) {
            $id = $_POST['id'];
            $name = $_POST['name'];
            $data = array($name, $id);

            $data = array($name, $id);
            $sql = "UPDATE `characters` SET `name` = ? WHERE `characters`.`id` = ?;";

            return DataBase::Update($sql, $data);
        } else {
            return $this->res(400, "名稱重複");
        }
    }
}
