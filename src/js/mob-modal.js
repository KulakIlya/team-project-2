const openModalBtn = document.querySelector('.menu-mob-btn');
const closeModalBtn = document.querySelector('.close_menu_btn');
const listMenuItem = document.querySelector('.mob-menu-list');
const btnOrder = document.querySelector('.order-btn-menu');

const modal = document.querySelector('[data-modal]');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal(event) {
  if (event.target === closeModalBtn || event.target === listMenuItem) {
    modal.classList.add('is-hidden');
  } else modal.classList.toggle('is-hidden');
  document.documentElement.classList.toggle('is-modal-open');
}

listMenuItem.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    modal.classList.add('is-hidden');
  });
});

btnOrder.addEventListener('click', orderBtnAncor);
function orderBtnAncor(event) {
  if (event.currentTarget === btnOrder) {
    modal.classList.add('is-hidden');
  }
  return;
}
