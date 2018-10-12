;(function () {
	if(window.matchMedia('(min-width: 992px)').matches)
	{
		$('.first-monitor-i__section').css('height', $('.first-monitor-i').innerHeight() - $('.header-i').innerHeight());			  
	}

	$(window).resize(function(){
		if(minWidth992.matches) {		
		   $('.first-monitor-i__section').css('height', $('.first-monitor-i').innerHeight() - $('.header-i').innerHeight()); 	   		    
		}		
	});
}());