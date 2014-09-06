$(function(){
	settings = pb.plugin.get('minimum_message_font_size').settings;
	if (($.inArray(0,settings.posts_or_pms) && pb.data('route').name == 'thread') || ($.inArray(1,settings.posts_or_pms) && pb.data('route').name == 'conversation')) {
		function fixSizing() {
			$('div.message:not(.ui-resizable)').each(function(){
				if ($(this).css('font-size').replace('px','') < settings.minimum_size) {
					$(this).css('font-size',settings.minimum_size+'px');
					if (settings.override_size_tags > 0) {
						$(this).find('font[size]').each(function(){
							if ($(this).css('font-size').replace('px','') < settings.minimum_size) {
								$(this).css('font-size',settings.minimum_size+'px');
							}
						});
					}
				}
			});
		}
		fixSizing();
		proboards.on('pageChange',function(){
			fixSizing();
		});
	}
});