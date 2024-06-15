// script.js

$(document).ready(function () {
    $('.slider-inner img:first-child').addClass('active');
    $('.dot:first-child').addClass('active');
    
    $('.next').on('click', function () {
        nextSlide();
    });
    
    $('.dot').on('click', function () {
        var index = $(this).index();
        $('.active').removeClass('active').css('z-index', -10);
        $('.slider-inner img').eq(index).addClass('active').css('z-index', 10);
        $('.dot.active').removeClass('active');
        $(this).addClass('active');
    });
});

function nextSlide() {
    var currentImg = $('.active');
    var nextImg = currentImg.next('img');
    if (nextImg.length) {
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
    } else {
        $('.slider-inner img').removeClass('active').css('z-index', -10);
        $('.slider-inner img:first-child').addClass('active').css('z-index', 10);
    }
    var currentIndex = $('.active').index('.slider-inner img');
    $('.dot.active').removeClass('active');
    $('.dot').eq(currentIndex).addClass('active');
}
