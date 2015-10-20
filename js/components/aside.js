$('.aside-button').on('click', function(){
	
	if ($(window).width() < 787) {
	   $('aside').toggleClass('show-aside');
	   $('.aside-button').toggleClass('aside-button-move');
	}
});