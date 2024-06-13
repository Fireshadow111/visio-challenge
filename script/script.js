document.querySelector('.toggle-button').addEventListener('click', function() {
  document.getElementById('navbar').classList.toggle('open');
});

$(document).ready(function() {
  let $carouselInner = $('.carousel-inner');
  let $carouselItems = $('.carousel-item');
  let totalItems = $carouselItems.length;
  let currentIndex = 0;
 

  function showSlide(index) {
      if (index >= totalItems) {
          currentIndex = 1;
          $carouselInner.css('transition', 'none');
          $carouselInner.css('transform', 'translateX(0)');
          setTimeout(function() {
              $carouselInner.css('transition', 'transform 0.5s ease');
              $carouselInner.css('transform', 'translateX(' + (-currentIndex * 100) + '%)');
          }, 20);
      } else if (index < 0) {
          currentIndex = totalItems - 2;
          $carouselInner.css('transition', 'none');
          $carouselInner.css('transform', 'translateX(' + (-(totalItems - 1) * 100) + '%)');
          setTimeout(function() {
              $carouselInner.css('transition', 'transform 0.5s ease');
              $carouselInner.css('transform', 'translateX(' + (-currentIndex * 100) + '%)');
          }, 20);
      } else {
          currentIndex = index;
          $carouselInner.css('transform', 'translateX(' + (-currentIndex * 100) + '%)');
      }
  }

  $('.next').click(function() {
      showSlide(currentIndex + 1);
  });

  $('.prev').click(function() {
      showSlide(currentIndex - 1);
  });

  setInterval(function() {
      showSlide(currentIndex + 1);
  }, autoplayInterval);

  showSlide(currentIndex);
});
