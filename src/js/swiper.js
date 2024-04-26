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
 * @param {object} options.slidesPerView – object of numbers of visible slides on different devices
 * @param {number} options.slidesPerView.mobile – number of visible slides on mobile device
 * @param {number} options.slidesPerView.tablet – number of visible slides on tablet device
 * @param {number} options.slidesPerView.desktop – number of visible slides on desktop device
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
  slidesPerView = { mobile: 1, tablet: 1, desktop: 1 },
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

    slidesPerView: slidesPerView.mobile,
    breakpoints: {
      375: { slidesPerView: slidesPerView.tablet },
      768: { slidesPerView: slidesPerView.desktop },
    },
  });
}
