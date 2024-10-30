<?php
/**
 * Plugin Name: Disable Publish Button Until Scheduled
 * Description: This plugin disables the publish button until a date to schedule is selected.
 * Version: 2.0.1
 * Author: Nathan Bogan
 * License: GPL2
 */
add_action( 'admin_head', 'disable_publish_button' );
add_action('wp_enqueue_scripts', 'disable_publish_button');
add_action( 'admin_enqueue_scripts', 'disable_publish_button');
function disable_publish_button() {

	
	if (function_exists('get_current_screen')) {
		$screen = get_current_screen();
		
		if ( 'post' == $screen->post_type && 'post' == $screen->base ) {
			wp_register_script( 'disableButton', plugins_url('disableButton.js',__FILE__ ), array('jquery'), null, true);
			wp_enqueue_script('disableButton');
		}
	}
}
