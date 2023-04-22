<?php
namespace App\Http\Utils;

class StandardResponse
{
    public static function res($status, $message, $result = null)
    {
        if ($result == null) {
            $result = array();
        }

        return array(
            "status" => $status,
            "message" => $message,
            "result" => $result
        );
    }
}
