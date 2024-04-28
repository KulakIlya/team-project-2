createAccordion({
  containerClass: 'accordion', // Клас контейнера аккордеона
  elementClass: 'accordion-item', // Клас кожного елементу аккордеона
  triggerClass: 'accordion-button', // Клас кнопки аккордеона
  panelClass: 'accordion-content' // Клас контенту аккордеона
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
