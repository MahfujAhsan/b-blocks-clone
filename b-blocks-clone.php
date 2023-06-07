<?php

/**
 * Plugin Name:       B-blocks-clone
 * Description:       Clonning the b-blocks original
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Mahfujur_Rahman
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       b-blocks-clone
 *
 * @package           b-blocks-clone
 */

if (version_compare($GLOBALS['wp_version'], '5.8-alpha-1', '<')) {
	add_filter('block_categories', 'bbcBlockCategories');
} else {
	add_filter('block_categories_all', 'bbcBlockCategories');
}

function bbcBlockCategories($categories)
{
	return array_merge([[
		'slug'	=> 'bBlocksClone',
		'title'	=> 'B_Blocks'
	]], $categories);
} // Categories

function b_blocks_clone_b_blocks_clone_block_init()
{
	register_block_type(__DIR__ . '/build', [
		'render_callback' => function ($attributes) {
			extract($attributes);
			ob_start(); 
			?>
			<div>
				<h2><?php echo esc_html($content) ?></h2>
			</div>
			<?php return ob_get_clean();
		},
	]);
}
add_action('init', 'b_blocks_clone_b_blocks_clone_block_init');
