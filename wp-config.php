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
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'beneclub' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
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
define( 'AUTH_KEY',         '55&lL3vrNh{MI|oi0b3u:]]446Q9K &>]=91:-u M45+ ^qG(oLOgC@EbmjmC|(k' );
define( 'SECURE_AUTH_KEY',  '<O.#~w|5)dJ*hc1+A~j(VWyuh+w[R{]sZ$kcTqIi_N4lIN)1f/X[:!J+z^qr9Rva' );
define( 'LOGGED_IN_KEY',    '-O V@[$1v/4xA^I1HT]d^m}6E4)|!jPh^!+>lGlz4S))=q$hPLq$sg%4ild&QHuS' );
define( 'NONCE_KEY',        ';bZ>y/{!gE#uWF%%j#`haiHrZ+&H)*Lm2O138jFuauN1`*(#UC{n1a^3XyMb5F5a' );
define( 'AUTH_SALT',        '-/bTq>{IxX:[L1a1SrW>/*}KP{dyf,`*v^!-`Sfx2WoVWV8IIPdt]:bM:/.CpwbS' );
define( 'SECURE_AUTH_SALT', '[h5J5;|w&yl/~Bsc1v#(%Bvf}:OzGVp1#}<C!oBh*,kf*E*d|GHW<F6k$0QhmW%J' );
define( 'LOGGED_IN_SALT',   '<@XKuT(Um4S0z6^_tCT[+>!utjY;ylm$HmittF,KGgu{T|191hy=c)-nz19k>RX0' );
define( 'NONCE_SALT',       'aWP9%kxHwvyMN>XW:tjn`UJ-QqE-^)1lxi_1X.z}y!@T:G|ld~[h^%_KO&_Coi 7' );

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
