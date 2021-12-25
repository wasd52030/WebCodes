<?php

namespace app\Controllers;

use vendor\Controller;
use app\Models\Order as OrderModel;
use \DateTime;

class Order extends Controller
{
    private $om;
    public function __construct()
    {
        $this->om = new OrderModel();
    }

    public function getOrders()
    {
        return $this->om->getOrders();
    }

    public function getOrderlist()
    {
        $order_id = $_POST['order_id'];
        return $this->om->getOrderlist($order_id);
    }

    public function newOrder()
    {
        $user_id = "A001"; //假設的登入帳號
        $date   = new DateTime();
        $datestr = $date->format('Y-m-d-H-i-s');
        $response = $this->om->newOrder($user_id, $datestr);
        if ($response['status'] == 200) {
            $result['id'] = $response['result'];
            $result['user_id'] = $user_id;
            $result['date'] = $datestr;
            $response['result'] = $result;
        }
        return $response;
    }

    public function newItem()
    {
        $order_id = $_POST['order_id'];
        $product_id = $_POST['product_id'];
        $product_price = $_POST['product_price'];
        $number = $_POST['number'];
        return $this->om->newItem($order_id, $product_id, $product_price, $number);
    }
}
