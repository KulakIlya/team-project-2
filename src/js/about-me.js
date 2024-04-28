import createAccordion from '../js/accordion';

const accordion = createAccordion({
  containerClass: 'accordion-container',
  elementClass: 'accordion-item',
  triggerClass: 'accordion-button',
  panelClass: 'accordion-content'
});

const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;

    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".swiper-slide");

  function showSlide(index) {
      slides.forEach((slide, i) => {
          if (i === index) {
              slide.classList.add("swiper-slide-a");
              slide.classList.remove("swiper-slide");
              setTimeout(() => {
                  slide.classList.add("slide-enter");
              }, i * 100);
          } else {
              slide.classList.add("swiper-slide");
              slide.classList.remove("swiper-slide-a", "slide-enter");
          }
      });
  }

  let currentIndex = 0;
  setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }, 2000);
});

