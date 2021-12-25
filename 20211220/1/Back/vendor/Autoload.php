<?php
class Autoload
{
    static function  execute($class_name)
    {
        $filename = str_replace("\\", "/", $class_name);
        $filename = sprintf("%s/../%s.php",__DIR__,$filename);
        if (file_exists($filename)) {
            include $filename;
        }
    }
}

spl_autoload_register(array("Autoload", "execute"));
