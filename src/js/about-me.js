import createAccordion from './accordion';
import createSwiper from './swiper';

createAccordion({
  containerClass: 'accordion', // Клас контейнера аккордеона
  elementClass: 'accordion-item', // Клас кожного елементу аккордеона
  triggerClass: 'accordion-button', // Клас кнопки аккордеона
  panelClass: 'accordion-content', // Клас контенту аккордеона
});

const aboutmeSwiper = createSwiper({
  swiperContainerClass: 'aboutme-swiper',
  navigationButtons: {
    prevEl: 'aboutme-skill-prev',
    nextEl: 'aboutme-skill-next',
  },
  slidesPerView: { mobile: 2, tablet: 3, desktop: 6 },
  spaceBetween: 0,
  loop: true,
});

const nextSlideBtn = document.querySelector('.aboutme-slide-next');
nextSlideBtn.addEventListener('click', e => {
  console.log('click-nextSlideBtn');
  aboutmeSwiper.slideNext();
});
