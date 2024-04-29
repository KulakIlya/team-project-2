import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

/**
 * initializes swiper instance
 * @param {object} options – object of options
 * @param {string} options.swiperContainerClass – class of swiper container
 * @param {object} options.navigationButtons - object of navigation buttons
 * @param {string} options.prevEl – class of prev button
 * @param {string} options.nextEl – class of next button
 * @returns {Swiper} – created instance
 */

export default function createSwiper({
  swiperContainerClass,
  navigationButtons: { prevEl, nextEl },
  spaceBetween = 30,
}) {
  return new Swiper(`.${swiperContainerClass}`, {
    // Install modules
    modules: [Navigation],
    speed: 500,
    navigation: {
      nextEl: `.${nextEl}`,
      prevEl: `.${prevEl}`,
    },
    spaceBetween,
  });
}
