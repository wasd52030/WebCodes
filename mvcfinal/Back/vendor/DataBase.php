<?php

namespace vendor;

use vendor\Controller;
use \PDO;
use \PDOException;

class DataBase extends Controller
{
    public static $db_host;
    public static $db_name;
    public static $db_user;
    public static $db_pwd;
    public static $conn = null;

    static function Connect()
    {
        if (self::$conn) {
            return;
        }

        $dsn = sprintf("mysql:host=%s;dbname=%s;charest=utf8", self::$db_host, self::$db_name);
        try {
            self::$conn = new PDO($dsn, self::$db_user, self::$db_pwd);
            self::$conn->query('set names UTF8');
        } catch (PDOException $err) {
            self::$conn = null;
        }
    }

    static function Select($sql, $args)
    {
        if (!(self::$conn)) {
            return self::res(500, "無法存取資料庫");
        }

        $stmt = self::$conn->prepare($sql);
        $result = $stmt->execute($args);
        if ($result) {
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return self::res(200, "查詢成功", $rows);
        }
        return self::res(400, "SQL ERROR");
    }

    static function Insert($sql, $args)
    {
        if (!(self::$conn)) {
            return self::res(500, "無法存取資料庫");
        }

        $stmt = self::$conn->prepare($sql);
        $result = $stmt->execute($args);
        if ($result) {
            $cnt = $stmt->rowCount();
            return ($cnt < 1) ? self::res(204, "新增失敗") : self::res(200, "新增成功");
        }
        return self::res(400, "SQL ERROR");
    }

    static function Delete($sql, $args)
    {
        if (!(self::$conn)) {
            return self::res(500, "無法存取資料庫");
        }

        $stmt = self::$conn->prepare($sql);
        $result = $stmt->execute($args);
        if ($result) {
            $cnt = $stmt->rowCount();
            return ($cnt < 1) ? self::res(204, "刪除失敗") : self::res(200, "刪除成功");
        }
        return self::res(400, "SQL ERROR");
    }

    static function Update($sql, $args)
    {
        if (!(self::$conn)) {
            return self::res(500, "無法存取資料庫");
        }

        $stmt = self::$conn->prepare($sql);
        $result = $stmt->execute($args);
        if ($result) {
            $cnt = $stmt->rowCount();
            if ($cnt == 0) {
                return self::res(200, "完全沒動");
            } else if ($cnt < 1) {
                self::res(204, "更新失敗");
            } else {
                return self::res(200, "更新成功");
            }
        }
        return self::res(400, "SQL ERROR");
    }
}
