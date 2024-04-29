const scrollToTopBtn = document.querySelector('.btn-scroll-to-top');
const triggerSection = document.querySelector('.trigger-scroll-top-section');

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const options = {
  rootMargin: '0px',
  threshold: 0,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) scrollToTopBtn.classList.add('is-hidden');
    else scrollToTopBtn.classList.remove('is-hidden');
  });
}, options);

if (triggerSection) observer.observe(triggerSection);
