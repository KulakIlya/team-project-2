import createSwiper from './swiper';


createSwiper({
    swiperContainerClass: 'swiper',
    slideClass: 'swiper-slide',
    navigationButtonClasses: {
        prevEl: 'swiper-button-prev',
        nextEl: 'swiper-button-next',
    },
    slideActiveClass: 'swiper-slide-active',
    disabledButtonClass: 'swiper-button-disabled',
    slideNextClass: 'swiper-slide-next',
    slidesPerView: { mobile: 1, tablet: 2, desktop: 4 },
});

const swiper = new Swiper('.swiper-container', {
    // Вказуємо кількість видимих слайдів для різних роздільностей екрану
    slidesPerView: {
        // Для мобільних пристроїв
        480: 1, // Показуємо по одному слайду
        // Для планшетів
        768: 2, // Показуємо по два слайди
        // Для комп'ютерів
        1200: 4 // Показуємо по чотири слайди
    },
    // Додаткові налаштування
    // ...
});





