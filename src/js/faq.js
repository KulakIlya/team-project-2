import createAccordion from './accordion';

document.addEventListener('DOMContentLoaded', function () {
  createAccordion({
    containerClass: 'faq-list',
    elementClass: 'faq-item',
    triggerClass: 'faq-scroll-button',
    panelClass: 'ac-panel',
  });

  const triggers = document.querySelectorAll('.faq-scroll-button');

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
        const panel = this.closest('.faq-item').querySelector('.ac-panel');

      if (panel.style.display === 'block' || panel.style.display === '') {
          panel.style.display = 'none';
        
      } else {
          panel.style.display = 'block';
          
      }
    });
  });
});
