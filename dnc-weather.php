<?php
/**
 * @version: 1.0.0
 * @package: dnc-weather
 * Plugin Name: Live weather forecast by D&C Studios
 * Author: Deepak Kumar
 * Author URI: https://linkedin.com/in/deepak01
 * Description: Live Weather Forecast using weatherapi.com | use shortcode <code>[gpm_weather]</code> anywhere.
 * Plugin URI: https://designandcode.tech/
 * Version: 1.0.0
 *  */

//register shortcode
add_shortcode('gpm_weather', function(){require_once ('front-end/index.html');});

//Insert style
add_action('wp_head',function(){
    echo "<link href='". plugin_dir_url( __FILE__ )."front-end/style.css' rel='stylesheet'>
    <style>
    @font-face{font-family:'weathericons';src:url('". plugin_dir_url( __FILE__ )."front-end/font/weathericons-regular-webfont.eot');src:url('". plugin_dir_url( __FILE__ )."front-end/font/weathericons-regular-webfont.eot?#iefix') format('embedded-opentype'),url('". plugin_dir_url( __FILE__ )."front-end/font/weathericons-regular-webfont.woff2') format('woff2'),url('". plugin_dir_url( __FILE__ )."front-end/font/weathericons-regular-webfont.woff') format('woff'),url('". plugin_dir_url( __FILE__ )."front-end/font/weathericons-regular-webfont.ttf') format('truetype'),url('". plugin_dir_url( __FILE__ )."front-end/font/weathericons-regular-webfont.svg#weather_iconsregular') format('svg');font-weight:normal;font-style:normal}
    </style>";
});
//Insert script
add_action('wp_footer',function(){
    echo '<script defer src="'.plugin_dir_url( __FILE__ ).'front-end/script.js"></script>';
});