$(function(){
	if (($.inArray(0,pb.plugin.get('minimum_message_font_size').settings.posts_or_pms) && pb.data('route').name == 'thread') || ($.inArray(1,pb.plugin.get('minimum_message_font_size').settings.posts_or_pms) && pb.data('route').name == 'conversation')) {
		$('div.message:not(.ui-resizable)').each(function(){
			if ($(this).css('font-size').replace('px','') < pb.plugin.get('minimum_message_font_size').settings.minimum_size) {
				$(this).css('font-size',pb.plugin.get('minimum_message_font_size').settings.minimum_size+'px');
				if (pb.plugin.get('minimum_message_font_size').settings.override_size_tags > 0) {
					$(this).find('font[size]').each(function(){
						if ($(this).css('font-size').replace('px','') < pb.plugin.get('minimum_message_font_size').settings.minimum_size) {
							$(this).css('font-size',pb.plugin.get('minimum_message_font_size').settings.minimum_size+'px');
						}
					});
				}
			}
		});
	}
});
