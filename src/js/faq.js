import createAccordion from './accordion';

document.addEventListener("DOMContentLoaded", function () {
    createAccordion({
        containerClass: 'faq-list',
        elementClass: 'faq-item',
        triggerClass: 'faq-scroll-button',
        panelClass: 'ac-panel',
    });
});


