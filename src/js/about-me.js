import createAccordion from './accordion';

createAccordion({
  containerClass: 'accordion', // Клас контейнера аккордеона
  elementClass: 'accordion-item', // Клас кожного елементу аккордеона
  triggerClass: 'accordion-button', // Клас кнопки аккордеона
  panelClass: 'accordion-content', // Клас контенту аккордеона
});

const accordion = document.querySelector('.accordion');

accordion?.addEventListener('click', e => {
  const closest = e.target.closest('.accordion-button');

  if (!closest) return;

  closest.querySelector('.icon-arrow-down').classList.toggle('rotated');
});
