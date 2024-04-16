
    document.addEventListener("DOMContentLoaded", function () {
      const images = document.querySelectorAll('.popular-image');
      let currentIndex = 0;
  
      function moveLeftAndDisappear() {
          if (currentIndex < images.length - 1) {
              images[currentIndex].style.opacity = 0;
              currentIndex++;
          } else {
              resetImages();
          }
      }
  
      function resetImages() {
          images.forEach(image => {
              image.style.opacity = 1;
          });
          currentIndex = 0;
      }
  
      // Add click event listeners to each image
      images.forEach(image => {
          image.addEventListener("click", moveLeftAndDisappear);
      });
  });
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  function showSlide(index) {
      if (index < 0) {
          currentIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
          currentIndex = 0;
      } else {
          currentIndex = index;
      }

      const translateValue = -100 * currentIndex + '%';
      document.getElementById('slider').style.transform = 'translateX(' + translateValue + ')';
  }

  function prevSlide() {
      showSlide(currentIndex - 1);
  }

  function nextSlide() {
      showSlide(currentIndex + 1);
  }