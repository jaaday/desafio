<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'banco_dev' );

/** Database username */
define( 'DB_USER', 'wordpress' );

/** Database password */
define( 'DB_PASSWORD', '884144@Word' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '-StZ#unuMRh=beKFNALK7XDQV9-HE+$(9Ka6Ey7L+]))b{%#wZiw,1&wVu3}WurV' );
define( 'SECURE_AUTH_KEY',  '^;E`e@D7Hzy5>bzr]rnX^WV}8vM.M2-wn`P9hZ6F]&yD3U,x7>D>GJj4{!j 1:uT' );
define( 'LOGGED_IN_KEY',    '-b6{+K^GeQl`2q7o%Ye#7wDJ*=/#ou9db*;*_ `m=IU0g=/?$7en_^>3 BK1#vIe' );
define( 'NONCE_KEY',        'uV!SMmUvG.fEpk9xkd*sR&Nw4$u*:FWI,%n`]CW6gBt%7rJ  ,W&VKR?:S_^21rS' );
define( 'AUTH_SALT',        'cnRlxy$dVU;-8CLE>R7O TB{A1d=8# v6SqR~B0]wf=l_y.;hI5#mL-}H)*b};*/' );
define( 'SECURE_AUTH_SALT', 'pnrYW%+~~biCWH&sh#6tmTao<M,0m$:KA0X]V*KtYv?XMBY+bB]!/K-:Tl+7%oWn' );
define( 'LOGGED_IN_SALT',   '-4hj|]cj_+;Xy780Sg_k3Wh,Upf8<u<^HTRzRz6gq=eHc`HxObI^&mx0O)}X%_#T' );
define( 'NONCE_SALT',       '+[Me?j,_LQ3$gZ>O|LCMHK{m13~WZo}vQL?KvZL_D#|sYu8kA?|N9wRgtwyXd0Z ' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
