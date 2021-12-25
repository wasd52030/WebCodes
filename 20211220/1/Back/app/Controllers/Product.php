<?php

namespace app\Controllers;

use vendor\Controller;
use app\Models\Product as ProductModel;

class Product extends Controller
{
    private $m;
    public function __construct()
    {
        $this->m = new ProductModel();
    }

    public function getProducts()
    {
        return (isset($_POST["id"])) ? $this->m->getProduct($_POST["id"]) : $this->m->getProducts();
    }

    public function newProduct()
    {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $cost = $_POST['cost'];
        $price = $_POST['price'];
        $Pcount = $_POST['count'];

        return $this->m->newProduct($id, $name, $cost, $price, $Pcount);
    }

    public function removeProduct()
    {
        $id = $_POST['id'];
        return $this->m->removeProduct($id);
    }

    public function updateProduct()
    {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $cost = $_POST['cost'];
        $price = $_POST['price'];
        $Pcount = $_POST['count'];

        return $this->m->updateProduct($id, $name, $cost, $price, $Pcount);
    }
}
