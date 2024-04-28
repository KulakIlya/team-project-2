import createSwiper from './swiper';

const reviewsData = [
    {
        name: "Natalia",
        photo: "./images/reviews_natalia@1x.png",
        text: "Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations."
    },
    {
        name: "Dmytro",
        photo: "./images/reviews_dmytro@1x.png",
        text: "I have the honor to recommend him as an exceptional professional in his field. His knowledge and expertise are undeniable. Cooperation with him always brings impressive results."
    },
    {
        name: "Anna",
        photo: "./images/reviews_anna@1x.png",
        text: "The developed project impresses with its quality and efficiency. The code is cleanly written and the functionality exceeds expectations. Extremely satisfied with the cooperation!"
    },
    {
        name: "Ivetta",
        photo: "./images/reviews_ivetta@1x.png",
        text: "Thanks for the excellent work on the project! His talent and professionalism deserve recognition. I recommend it to everyone who is looking for an expert in the field of software development."
    },
    {
        name: "Alex",
        photo: "./images/reviews_alex@1x.png",
        text: "Thanks for the excellent work on the project! His talent and professionalism deserve recognition. I recommend it to everyone who is looking for an expert in the field of software development."
    }
];

function generateReviewCard(review) {
    return `
        <li class="swiper-slide">
            <img src="${review.photo}" alt="photo" width="48" height="48" loading="lazy">
            <div class="">
                <h3 class="reviews-name">${review.name}</h3>
                <p class="reviews-text">${review.text}</p>
            </div>
        </li>
    `;
}

const reviewsContainer = document.querySelector('.reviews-ul');

reviewsData.forEach(review => {
    reviewsContainer.innerHTML += generateReviewCard(review);
});



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
    slidesPerView: {
        480: 1, 
        768: 2, 
        1200: 4 
    },
   
});