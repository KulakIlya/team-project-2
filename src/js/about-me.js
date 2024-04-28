createSwiper({
  swiperContainerClass: 'swiper-container',
  slideClass: 'swiper-slide',
  navigationButtonClasses: {
    prevEl: 'button-left',
    nextEl: 'button-right',
  },
  slideActiveClass: 'swiper-slide-active',
  disabledButtonClass: 'button-left',
  slideNextClass: 'swiper-slide-next',
  slidesPerView: { mobile: 1, tablet: 2, desktop: 4 },
});

export default function createAccordion({
  containerClass,
  elementClass,
  triggerClass,
  panelClass,
}) {
  const container = document.querySelector(`.accordion-button`);

  return new Accordion(container, {
    elementClass,
    triggerClass,
    panelClass,
  });
}