$(document).ready(function(){
    var slideIndex = 0;
    var slides = $(".slides");
    var dots = $(".dot");
    var slideDuration = 500; 

    function showSlides() {
        slides.fadeOut(slideDuration);
        dots.removeClass("active");
        setTimeout(function(){
            slides.eq(slideIndex).fadeIn(slideDuration);
            dots.eq(slideIndex).addClass("active");
        }, slideDuration);
    }

    function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlides();
    }

    function prevSlide() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        showSlides();
    }

    $(".next").click(function(){
        nextSlide();
    });

    $(".prev").click(function(){
        prevSlide();
    });

  
    showSlides();
});
