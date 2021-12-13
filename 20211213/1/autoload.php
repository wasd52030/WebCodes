<?php
function autoload($className)
{
    $filename = str_replace("\\", "/", $className);
    $filename = sprintf("%s.php", $filename);
    if (file_exists($filename)) {
        include $filename;
    }
}

spl_autoload_register('autoload');
