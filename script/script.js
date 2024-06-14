$(document).ready(function(){
    let slideIndex = 0;
    let slides = $(".slides");
    let ci = $(".ci");

    function showSlides() {
        slides.removeClass("active");
        ci.removeClass("active");

        slides.eq(slideIndex).addClass("active").css("transform", "translateX(0)");
        ci.eq(slideIndex).addClass("active");
    }

    function nextSlide() {
        var currentSlide = slideIndex;
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        slides.eq(currentSlide).css("transform", "translateX(-100%)");
        slides.eq(slideIndex).css("transform", "translateX(100%)");
        setTimeout(showSlides, 50); 
    }

    function prevSlide() {
        var currentSlide = slideIndex;
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        slides.eq(currentSlide).css("transform", "translateX(100%)");
        slides.eq(slideIndex).css("transform", "translateX(-100%)");
        setTimeout(showSlides, 50); 
    }

    $(".next").click(function(){
        nextSlide();
    });

    $(".prev").click(function(){
        prevSlide();
    });

    slides.eq(slideIndex).addClass("active");
    ci.eq(slideIndex).addClass("active");
});
