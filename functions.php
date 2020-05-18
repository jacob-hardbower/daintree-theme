<?php
/**
 * Built on Timber starter-theme
 * https://github.com/timber/starter-theme
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */


// Set up default Timber options
require "includes/timber-setup.php";

// Add Menus to Timber
add_filter( 'timber/context', 'add_to_context' );
function add_to_context( $context ) {
    $context['primary_menu'] = new \Timber\Menu( 2 );
		// $context['footer_menu'] = new \Timber\Menu( 3 );
    return $context;
}

function my_load_scripts($hook) {
    // create version codes
    $my_js_ver  = date("ymd-Gis", filemtime( get_template_directory_uri() . '/static/site.js' ));
    $my_css_ver = date("ymd-Gis", filemtime( get_template_directory_uri() . '/style.css' ));

    wp_enqueue_script( 'custom_js', get_template_directory_uri() . '/static/site.js', array('jquery'), $my_js_ver, true );
    wp_register_style( 'my_css',    get_template_directory_uri() . '/style.css', false, $my_css_ver );
    wp_enqueue_style ( 'my_css' );

}
add_action('wp_enqueue_scripts', 'my_load_scripts');

// Add Options pages
require "includes/acf-basic-fields.php";
