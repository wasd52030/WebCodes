<?php

namespace app\Models;

use vendor\DataBase;

class Order
{
    public function __construct()
    {
        DataBase::Connect();
    }

    public function getOrders()
    {
        $sql = "SELECT  *  FROM  `orders`";
        $arg = NULL;
        return DataBase::select($sql, $arg);
    }

    public function getOrder($id)
    {
        $sql = "SELECT  *  FROM  `orders` WHERE `id`=?";
        $arg = array($id);
        return DataBase::select($sql, $arg);
    }

    public function getOrderlist($order_id)
    {
        $sql = "SELECT 
                    `orderlist`.`id` as id,
                    `orderlist`.`product_id` as product_id,
                    `product`.`name` as product_name,
                    `orderlist`.`num` as num,
                    `orderlist`.`price` as price
                FROM `orderlist`, `product` 
                WHERE `order_id`=? and `orderlist`.product_id=`product`.id
                ";
        $arg = array($order_id);
        return DataBase::select($sql, $arg);
    }

    public function newOrder($user_id, $date)
    {
        $sql = "INSERT INTO `orders` (`user_id`, `date`) VALUES (?, ?)";
        return DataBase::insert($sql, array($user_id, $date));
    }

    public function newItem($order_id, $product_id, $product_price, $number)
    {
        $sql = "INSERT INTO  
                   `orderlist` 
                   (`order_id`, `product_id`, `num`, `price`) 
                    VALUES (?, ?, ?, ?)
        ";
        $arg = array($order_id, $product_id, $number, $product_price);
        return DataBase::insert($sql, $arg);
    }
}
