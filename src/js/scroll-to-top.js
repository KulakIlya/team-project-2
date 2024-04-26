const scrollToTopBtn = document.querySelector('.btn-scroll-to-top');
const firstSection = document.querySelector('.hero');

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const options = {
  rootMargin: '0px',
  threshold: 1.0,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) scrollToTopBtn.classList.add('is-hidden');
    else scrollToTopBtn.classList.remove('is-hidden');
  });
}, options);

if (firstSection) observer.observe(firstSection);
