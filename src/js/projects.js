import createSwiper from './swiper';

const swiper = createSwiper({
  swiperContainerClass: 'swiper-container',
  navigationButtons: {
    prevEl: 'projects-button-prev',
    nextEl: 'projects-button-next',
  },
  spaceBetween: 200,
});
