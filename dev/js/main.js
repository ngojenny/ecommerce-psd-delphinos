$(function() {
	//MAKE NAVIGATION RESPONSIVE
    $('nav .fa-bars').on('click', function(){
    	$('.main-nav-links').addClass('show-responsive-nav');
    });

    $('.fa-times').on('click', function(){
    	$('.main-nav-links').removeClass('show-responsive-nav')
    });

    $('.main-nav-links a').on('click', function(){
    	$('.main-nav-links').removeClass('show-responsive-nav')
    });

    //MAKE FILTER FUNCTIONALITY WORK
    $('.main-slider').flickity({
        imagesLoaded: true,
        wrapAround: true
    });

    //MAKE FLICKITY WORK
    
}); 