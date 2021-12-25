<?php
namespace vendor;

abstract class Controller
{
    protected static function res($status, $message, $result = null)
    {
        return array(
            "status" => $status,
            "message" => $message,
            "result" => $result
        );
    }
}
