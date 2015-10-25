$('.aside-button').on('click', function(){
	
	if ($(window).width() < 787) {
	   $('.side-content').toggleClass('show-aside');
	   $('.aside-button').toggleClass('aside-button-move');
	}
});