<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5437c394294a774323e97ab6a55e51b3
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5437c394294a774323e97ab6a55e51b3::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5437c394294a774323e97ab6a55e51b3::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit5437c394294a774323e97ab6a55e51b3::$classMap;

        }, null, ClassLoader::class);
    }
}
