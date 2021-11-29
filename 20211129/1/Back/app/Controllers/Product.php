<?php
require_once sprintf("%s/../../vendor/DataBase.php", __DIR__); 
require_once sprintf("%s/../../vendor/Controller.php", __DIR__); 

class Product extends Controller
{
    public function __construct()
    {
        DataBase::Connect();
    }

    public function getProducts()
    {

        if (isset($_POST["id"])) {
            $id = $_POST["id"];
            $sql = "SELECT * FROM `Product` WHERE `id`=?";
            $parmas = array($id);
        } else {
            $sql = "SELECT * FROM `Product`";
            $parmas = null;
        }
        return DataBase::Select($sql, $parmas);
    }

    public function newProduct()
    {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $cost = $_POST['cost'];
        $price = $_POST['price'];
        $Pcount = $_POST['count'];

        $data = array($id, $name, $cost, $price, $Pcount);
        $sql = "INSERT INTO `Product` (`id`, `name`, `cost`, `price`, `count`) VALUES (?,?,?,?,?);";

        return DataBase::Insert($sql, $data);
    }

    public function removeProduct()
    {
        $id = $_POST['id'];

        $data = array($id);
        $sql = "DELETE FROM Product WHERE Product.id = ?";

        return DataBase::Delete($sql, $data);
    }

    public function updateProduct()
    {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $cost = $_POST['cost'];
        $price = $_POST['price'];
        $Pcount = $_POST['count'];

        $data = array($name, $cost, $price, $Pcount, $id);
        $sql = "UPDATE Product SET name=?,cost= ?,price=?,count=? WHERE Product.id= ?;";

        return DataBase::Update($sql, $data);
    }
}
