$(function() {
    $('.fa-bars').on('click', function(){
    	$('.main-nav-links').addClass('show-responsive-nav');
    });

    $('.fa-times').on('click', function(){
    	$('.main-nav-links').removeClass('show-responsive-nav')
    });

    $('.main-nav-links a').on('click', function(){
    	$('.main-nav-links').removeClass('show-responsive-nav')
    });
}); 