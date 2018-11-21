<?php
/**
 * Plugin Name: Pomo.do Shortcode
 * Description:
 */

/**
 * [pomo_do_shortcode] description
 *
 * @return [type] [description]
 */
function pomo_do_shortcode() {
	wp_enqueue_script( 'pomo-do' );
	wp_enqueue_style( 'pomo-do' );
	?>
	<section id="pomodo-section">
		<form id="pomodo-form" action="" class="pomodo-form-class">
			<div class="input-group">
				<input type="input" name="pomodo-input" class="form-control" id="pomodo-input" placeholder="What do you need to do, today?">
				<span id="pomodo-btn-span" >
					<button id="pomodo-button" type="submit" class="pomodo-btn btn btn-primary">Add a pomo.DO</button>
				</span>
			</div>
		</form>
		<div id="pomodo-response">pomodo-response</div>
	</section>
	<?php
}
add_shortcode( 'pomo-do-shortcode', 'pomo_do_shortcode' );

function pomo_do_scripts() {
	wp_register_style( 'pomo-do', plugins_url( '/inc/css/pomodo-style.css', __FILE__ ) );
	wp_register_script( 'pomo-do', plugins_url( '/inc/js/pomodo-ajax.js', __FILE__ ), array( 'jquery' ) );
	wp_localize_script(
		'pomo-do',
		'pomo_do_object',
		array(
			'pomo_do_ajaxurl' => admin_url( 'admin-ajax.php' ),
			'pomo_nerd'       => 'pomo-do-nonce',
			'pomo_do_nonce'   => wp_create_nonce( 'pomo-do-nonce' ),
		)
	);
}
add_action( 'wp_enqueue_scripts', 'pomo_do_scripts' );

function pomo_do_callback() {
	$return = $_POST;
	echo '<pre>';
	print_r( $return );
	echo '</pre>';
	exit();
}
add_action( 'wp_ajax_pomo_do_action', 'pomo_do_callback' );


