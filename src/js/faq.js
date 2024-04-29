import createAccordion from './accordion';

createAccordion({
  containerClass: 'faq-list',
  elementClass: 'faq-item',
  triggerClass: 'faq-scroll-button',
  panelClass: 'acc-panel',
});

const faqList = document.querySelector('.faq-list');

faqList.addEventListener('click', e => {
  const closest = e.target.closest('.faq-item');

  if (!closest) return;

  closest.querySelector('#icon-arrow-down').classList.toggle('rotated');
});
