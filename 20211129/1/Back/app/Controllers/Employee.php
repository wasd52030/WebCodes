<?php
require_once sprintf("%s/../../vendor/DataBase.php", __DIR__); 
require_once sprintf("%s/../../vendor/Controller.php", __DIR__); 

class Employee extends Controller
{

    public function __construct()
    {
        DataBase::Connect();
    }

    public function getUsers()
    {

        if (isset($_POST["id"])) {
            $id = $_POST["id"];
            $sql = "SELECT * FROM `employee` WHERE `id`=?";
            $parmas = array($id);
        } else {
            $sql = "SELECT * FROM `employee`";
            $parmas = null;
        }
        return DataBase::Select($sql, $parmas);
    }

    public function newUser()
    {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $pwd = $_POST['pwd'];
        $EntryDate = $_POST['EntryDate'];
        $address = $_POST['address'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];

        $data = array($id, $name, $pwd, $EntryDate, $address, $email, $phone);
        $sql = "INSERT INTO `employee` (`id`, `name`, `pwd`, `EntryDate`, `address`, `email`, `phone`) VALUES (?,?,?,?,?,?,?);";

        return DataBase::Insert($sql, $data);
    }

    public function removeUser()
    {
        $id = $_POST['id'];

        $data = array($id);
        $sql = "DELETE FROM employee WHERE employee.id = ?";

        return DataBase::Delete($sql, $data);
    }

    public function updateUser()
    {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $pwd = $_POST['pwd'];
        $EntryDate = $_POST['EntryDate'];
        $address = $_POST['address'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];

        $data = array($name, $pwd, $EntryDate, $address, $email, $phone, $id);
        $sql = "UPDATE employee SET name=?,pwd= ?,EntryDate=?,address=?,email=?,phone= ? WHERE employee.id= ?;";

        return DataBase::Update($sql, $data);
    }
}
