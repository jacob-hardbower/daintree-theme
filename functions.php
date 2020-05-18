<?php
/**
 * Built on Timber starter-theme
 * https://github.com/timber/starter-theme
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

require "includes/timber-setup.php";

function my_load_scripts($hook) {
    // create version codes
    $my_js_ver  = date("ymd-Gis", filemtime( get_template_directory_uri() . '/static/site.js' ));
    $my_css_ver = date("ymd-Gis", filemtime( get_template_directory_uri() . '/style.css' ));

    wp_enqueue_script( 'custom_js', get_template_directory_uri() . '/static/site.js', array('jquery'), $my_js_ver, true );
    wp_register_style( 'my_css',    get_template_directory_uri() . '/style.css', false, $my_css_ver );
    wp_enqueue_style ( 'my_css' );

}
add_action('wp_enqueue_scripts', 'my_load_scripts');

require "includes/acf-basic-fields.php";
