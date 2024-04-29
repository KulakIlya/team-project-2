import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { Keyboard, Manipulation, Navigation } from 'swiper/modules';

/**
 * initializes swiper instance
 * @param {object} options – object of options
 * @param {string} options.swiperContainerClass – class of swiper container
 * @param {object} options.navigationButtons - object of navigation buttons
 * @param {string} options.prevEl – class of prev button
 * @param {string} options.nextEl – class of next button
 * @param {number} options.spaceBetween – space between slides
 * @param {object} options.slidesPerView – objects of slides per view
 * @param {number} options.slidesPerView.mobile – number of slides on mobile device
 * @param {number} options.slidesPerView.tablet – number of slides on tablet device
 * @param {number} options.slidesPerView.desktop – number of slides on desktop device
 * @returns {Swiper} – created instance
 */

export default function createSwiper({
  swiperContainerClass,
  navigationButtons: { prevEl, nextEl },
  spaceBetween = 30,
  slidesPerView = { mobile: 1, tablet: 1, desktop: 1 },
  ...otherOptions
}) {
  return new Swiper(`.${swiperContainerClass}`, {
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    modules: [Navigation, Manipulation, Keyboard],
    direction: 'horizontal',
    speed: 500,
    navigation: {
      nextEl: `.${nextEl}`,
      prevEl: `.${prevEl}`,
    },
    spaceBetween,
    slidesPerView: slidesPerView.mobile,
    breakpoints: {
      768: {
        slidesPerView: slidesPerView.tablet,
        spaceBetween:
          slidesPerView.tablet !== 1 && spaceBetween != 0 ? 16 : spaceBetween,
      },

      1440: {
        slidesPerView: slidesPerView.desktop,
        spaceBetween:
          slidesPerView.tablet !== 1 && spaceBetween != 0 ? 16 : spaceBetween,
      },
    },
    ...otherOptions,
  });
}
