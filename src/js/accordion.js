import Accordion from 'accordion-js';
/**
 * initializes accordion instance and accordion button click event listener
 * @param {object} options - object of required classes
 * @param {string} options.containerClass - The class of the container element to contain the accordion.
 * @param {string} options.elementClass - The class of each accordion element.
 * @param {string} options.triggerClass - The class of each accordion trigger element.
 * @param {string} options.panelClass – The class of each accordion panel element.
 * @returns {Accordion} – created instance
 */

export default function createAccordion({
  containerClass,
  elementClass,
  triggerClass,
  panelClass,
}) {
  const container = getClassName(`.${containerClass}`);

  const accordion = new Accordion(container, {
    elementClass,
    triggerClass,
    panelClass,
    showMultiple: true,
  });

  document.querySelector(`.${containerClass}`).addEventListener('click', e => {
    const closest = e.target.closest(`.${triggerClass}`);
    if (!closest) return;

    closest.querySelector('.icon-arrow-down').classList.toggle('rotated');
  });

  return accordion;
}

/**
 * finds element in DOM. If no element found – throws an error
 * @param {string} className – class of the container
 * @returns {string}
 */

function getClassName(className) {
  const ref = document.querySelector(className);
  if (!ref) throw new Error(`Element with class ${className} was not found`);
  return className;
}
