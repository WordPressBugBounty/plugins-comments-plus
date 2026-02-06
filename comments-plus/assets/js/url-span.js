/**
 * Url span
 * @author    Alex Kovalev <alex.kovalevv@gmail.com>, Github: https://github.com/alexkovalevv
 * @copyright (c) 17.11.2017, Webcraftic
 * @version 1.0
 */


(function($) {
	'use strict';

	$(function() {
		$(document).on("click", ".wbcr-clearfy-pseudo-link", function() {
			window.open($(this).data("uri"));
		});

		// Remove href from comment author links for block theme.
		const author_url_elements = $('.wp-block-comment-author-name a');
		author_url_elements.each(function() {
			const author_url = $(this).attr('href');
			$(this).removeAttr('href').attr('data-uri', author_url).addClass('wbcr-clearfy-pseudo-link');
		});
	})

})(jQuery);
