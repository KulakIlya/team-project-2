
import Swiper from 'swiper/bundle';

import 'swiper/swiper-bundle.css';



document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        navigation: false, 
      },
      1024: {
        slidesPerView: 2,
        navigation: false, 
      },
      1440: {
        slidesPerView: 4,
        navigation: true, 
      },
    },
  });
});

