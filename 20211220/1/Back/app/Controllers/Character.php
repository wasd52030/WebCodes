<?php

namespace app\Controllers;

use vendor\Controller;
use app\Models\Character as CharacterModel;

class Character extends Controller
{

    private $m;
    public function __construct()
    {
        $this->m = new CharacterModel();
    }

    public function getCharacters()
    {
        return isset($_POST["id"]) ? $this->m->getCharacter($_POST["id"]) : $this->m->getCharacters();
    }

    public function newCharacter()
    {
        $name = $_POST['name'];
        if ($this->m->check($name, 0, "add")) {
            return $this->m->newCharacter($name);
        } else {
            return $this->res(400, "名稱重複");
        }
    }

    public function removeCharacter()
    {
        $id = $_POST['id'];
        return $this->m->removeCharacter($id);
    }

    public function updateCharacter()
    {
        $id = $_POST['id'];
        $name = $_POST['name'];
        if ($this->m->check($name, $id, "update")) {
            return $this->m->updateCharacter($id, $name);
        } else {
            return $this->res(400, "名稱重複");
        }
    }
}
