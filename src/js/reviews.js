import { getReviews } from './api';
import createSwiper from './swiper';

function generateReviewCard(review) {
  return `
    <li class="swiper-slide reviews-li">
            <img class="avatar" src="${review.avatar_url}"
                 srcset="${review.avatar_url} 1x,
                         ${review.avatar_url.replace('@1x', '@2x')} 2x"
                 alt=${review.author}
                 width="48"
                 height="48"
                 loading="lazy">
            <div class="text-wrapper">
                <h3 class="reviews-name">${review.author}</h3>
                <p class="reviews-text">${review.review}</p>
            </div>
        </li>
    `;
}

const swiper = createSwiper({
  swiperContainerClass: 'swiper-reviews',
  navigationButtons: {
    prevEl: 'button-prev',
    nextEl: 'button-next',
  },
  slidesPerView: { mobile: 1, tablet: 2, desktop: 4 },
  spaceBetween: 20,
  loop: false,

  slidesPerGroup: 1,
});

getReviews()
  .then(reviews => {
    if (reviews.length > 0) {
      displayReviews(reviews);
      swiper.update();
      swiper.slidesPerViewDynamic();
    } else {
      displayPlaceholder();
    }
  })
  .catch(error => {
    console.error(error);
    displayPlaceholder();
  });

function displayPlaceholder() {
  const reviewsContainer = document.querySelector('.reviews-ul');
  reviewsContainer.innerHTML = '<p>Not found</p>';
}

function displayReviews(reviews) {
  reviews.forEach(item => swiper.appendSlide(generateReviewCard(item)));
}
