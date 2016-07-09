'use strict';

$(function () {
    //MAKE NAVIGATION RESPONSIVE
    $('nav .fa-bars').on('click', function () {
        $('.main-nav-links').addClass('show-responsive-nav');
    });

    $('.fa-times').on('click', function () {
        $('.main-nav-links').removeClass('show-responsive-nav');
    });

    $('.main-nav-links a').on('click', function () {
        $('.main-nav-links').removeClass('show-responsive-nav');
    });

    //MAKE FILTER FUNCTIONALITY WORK
    /* display counter for each category*/
    var chairCount = $('figure.chair').length;
    var tableCount = $('figure.table').length;
    var lampCount = $('figure.lamp').length;
    var watchCount = $('figure.watch').length;
    var clockCount = $('figure.clock').length;

    var blackCount = $('figure.black').length;
    var whiteCount = $('figure.white').length;
    var brownCount = $('figure.brown').length;
    var blueCount = $('figure.blue').length;
    var redCount = $('figure.red').length;

    var aecraftCount = $('figure.aecraft').length;
    var artekCount = $('figure.artek').length;
    var bowerCount = $('figure.bower').length;
    var culinariumCount = $('figure.culinarium').length;
    var desuCount = $('figure.desu').length;

    $('.num-chair').text(chairCount);
    $('.num-table').text(tableCount);
    $('.num-lamp').text(lampCount);
    $('.num-watch').text(watchCount);
    $('.num-clock').text(clockCount);

    $('.num-black').text(blackCount);
    $('.num-white').text(whiteCount);
    $('.num-brown').text(brownCount);
    $('.num-blue').text(blueCount);
    $('.num-red').text(redCount);

    $('.num-aecraft').text(aecraftCount);
    $('.num-artek').text(artekCount);
    $('.num-bower').text(bowerCount);
    $('.num-culinarium').text(culinariumCount);
    $('.num-desu').text(desuCount);

    /* filter out products on click */
    $('li.all').on('click', function () {
        $('figure.product').removeClass('filter-out');
    });

    $('li.chair').on('click', function () {
        $('figure:not(figure.chair)').addClass('filter-out');
    });

    $('li.table').on('click', function () {
        $('figure:not(figure.table)').addClass('filter-out');
    });

    $('li.lamp').on('click', function () {
        $('figure:not(figure.lamp)').addClass('filter-out');
    });

    $('li.watch').on('click', function () {
        $('figure:not(figure.watch)').addClass('filter-out');
    });

    $('li.clock').on('click', function () {
        $('figure:not(figure.clock)').addClass('filter-out');
    });

    $('li.black').on('click', function () {
        $('figure:not(figure.black)').addClass('filter-out');
    });

    $('li.white').on('click', function () {
        $('figure:not(figure.white)').addClass('filter-out');
    });

    $('li.brown').on('click', function () {
        $('figure:not(figure.brown)').addClass('filter-out');
    });

    $('li.blue').on('click', function () {
        $('figure:not(figure.blue)').addClass('filter-out');
    });

    $('li.red').on('click', function () {
        $('figure:not(figure.red)').addClass('filter-out');
    });

    $('li.aecraft').on('click', function () {
        $('figure:not(figure.aecraft)').addClass('filter-out');
    });

    $('li.artek').on('click', function () {
        $('figure:not(figure.artek)').addClass('filter-out');
    });

    $('li.bower').on('click', function () {
        $('figure:not(figure.bower)').addClass('filter-out');
    });

    $('li.culinarium').on('click', function () {
        $('figure:not(figure.culinarium)').addClass('filter-out');
    });

    $('li.desu').on('click', function () {
        $('figure:not(figure.desu)').addClass('filter-out');
    });

    //MAKE FLICKITY WORK
    $('.main-slider').flickity({
        imagesLoaded: true,
        wrapAround: true
    });
});