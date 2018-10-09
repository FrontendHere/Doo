;(function () {
	$(window).resize(function(){
		if(minWidth992.matches) {
		    $('.first-monitor-i__section').css('height', 'auto');
		} else {
		    $('.first-monitor-i__section').css('height', $('.first-monitor-i').innerHeight() - $('.header-i').innerHeight());
		}		
	});
}());