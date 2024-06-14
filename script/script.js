$(document).ready(function(){
    var slideIndex = 0;
    var slides = $(".slides");
    var dots = $(".dot");

    function showSlides() {
        slides.removeClass("active");
        dots.removeClass("active");

        slides.eq(slideIndex).addClass("active").css("transform", "translateX(0)");
        dots.eq(slideIndex).addClass("active");
    }

    function nextSlide() {
        var currentSlide = slideIndex;
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        slides.eq(currentSlide).css("transform", "translateX(-100%)");
        slides.eq(slideIndex).css("transform", "translateX(100%)");
        setTimeout(showSlides, 50); // Small delay to ensure transition effect
    }

    function prevSlide() {
        var currentSlide = slideIndex;
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        slides.eq(currentSlide).css("transform", "translateX(100%)");
        slides.eq(slideIndex).css("transform", "translateX(-100%)");
        setTimeout(showSlides, 50); // Small delay to ensure transition effect
    }

    $(".next").click(function(){
        nextSlide();
    });

    $(".prev").click(function(){
        prevSlide();
    });

    slides.eq(slideIndex).addClass("active");
    dots.eq(slideIndex).addClass("active");
});
