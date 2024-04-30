import createAccordion from './accordion';
import createSwiper from './swiper';

const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', e => {
  const closest = e.target.closest('.accordion-button');
  if (!closest) return;

  restoreDefaultPositionOfIcons(closest.id);
  closest.querySelector('.icon-arrow-down').classList.toggle('rotated');
});

const acc = createAccordion({
  containerClass: 'accordion', // Клас контейнера аккордеона
  elementClass: 'accordion-item', // Клас кожного елементу аккордеона
  triggerClass: 'accordion-button', // Клас кнопки аккордеона
  panelClass: 'accordion-content', // Клас контенту аккордеона
});

acc.open(0);

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

function restoreDefaultPositionOfIcons(iconToIgnore) {
  accordion.querySelectorAll('.accordion-button').forEach(item => {
    if (iconToIgnore === item.id) return;
    item.querySelector('.icon-arrow-down').classList.remove('rotated');
  });
}
