<?php
abstract class Controller
{
    public function res($status, $message, $result = null)
    {
        return array(
            "status" => $status,
            "message" => $message,
            "result" => $result
        );
    }
}
