import Swiper from 'swiper/bundle';

/**
 * initializes swiper instance
 * @param {object} options – object of options
 * @param {string} options.swiperContainerClass – class of swiper container
 * @param {string} options.slideClass – class of swiper slide
 * @param {object} options.navigationButtonClasses – object of next and previous buttons
 * @param {string} options.navigationButtonClasses.nextEl – class of next slide button
 * @param {string} options.navigationButtonClasses.prevEl – class of previous slide button
 * @param {string} options.slideActiveClass – class of active slide
 * @param {string} options.slideNextClass – class of next slide
 * @param {string} options.slidePrevClass – class of previous slide
 * @param {string} options.disabledButtonClass – class of disabled navigation button
 * @returns {Swiper} – created instance
 */

export default function createSwiper({
  swiperContainerClass,
  slideClass,
  navigationButtonClasses: { nextEl, prevEl },
  slideActiveClass,
  slideNextClass,
  slidePrevClass,
  disabledButtonClass,
}) {
  return new Swiper(`.${swiperContainerClass}`, {
    navigation: {
      nextEl: `.${nextEl}`,
      prevEl: `.${prevEl}`,
    },
    slideClass,
    slideActiveClass,
    slideNextClass,
    slidePrevClass,
    disabledClass: disabledButtonClass,
  });
}
