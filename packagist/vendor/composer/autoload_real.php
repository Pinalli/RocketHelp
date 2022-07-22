<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit38dad4b8d915f8c1a9d2e295a3fd31cf
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInit38dad4b8d915f8c1a9d2e295a3fd31cf', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit38dad4b8d915f8c1a9d2e295a3fd31cf', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit38dad4b8d915f8c1a9d2e295a3fd31cf::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}