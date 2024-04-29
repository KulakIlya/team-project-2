import Swiper from 'swiper';
<<<<<<< Updated upstream

import { Navigation } from 'swiper/modules';
=======
import 'swiper/css';
import 'swiper/css/navigation';

import { Manipulation, Navigation } from 'swiper/modules';
>>>>>>> Stashed changes

/**
 * initializes swiper instance
 * @param {object} options – object of options
 * @param {string} options.swiperContainerClass – class of swiper container
 * @param {object} options.navigationButtons - object of navigation buttons
 * @param {string} options.prevEl – class of prev button
 * @param {string} options.nextEl – class of next button
<<<<<<< Updated upstream
=======
 * @param {number} options.spaceBetween – space between slides
 * @param {object} options.slidesPerView – objects of slides per view
 * @param {number} options.slidesPerView.mobile – number of slides on mobile device
 * @param {number} options.slidesPerView.tablet – number of slides on tablet device
 * @param {number} options.slidesPerView.desktop – number of slides on desktop device
>>>>>>> Stashed changes
 * @returns {Swiper} – created instance
 */

export default function createSwiper({
  swiperContainerClass,
  navigationButtons: { prevEl, nextEl },
<<<<<<< Updated upstream
}) {
  return new Swiper(`.${swiperContainerClass}`, {
    // Install modules
    modules: [Navigation],
=======
  spaceBetween = 30,
  slidesPerView = { mobile: 1, tablet: 1, desktop: 1 },
}) {
  return new Swiper(`.${swiperContainerClass}`, {
    // Install modules
    modules: [Navigation, Manipulation],
    direction: 'horizontal',
>>>>>>> Stashed changes
    speed: 500,
    navigation: {
      nextEl: `.${nextEl}`,
      prevEl: `.${prevEl}`,
    },
<<<<<<< Updated upstream
=======
    spaceBetween,
    slidesPerView: slidesPerView.mobile,
    breakpoints: {
      768: {
        slidesPerView: slidesPerView.tablet,
        spaceBetween: slidesPerView.tablet !== 1 ? 16 : spaceBetween,
      },

      1440: {
        slidesPerView: slidesPerView.desktop,
        spaceBetween: slidesPerView.tablet !== 1 ? 16 : spaceBetween,
      },
    },
>>>>>>> Stashed changes
  });
}
