const openModalBtn = document.querySelector('.menu-mob-btn');
const closeModalBtn = document.querySelector('.close_menu_btn');
const listMenuItem = document.querySelector('.mob-menu-list');

const modal = document.querySelector('[data-modal]');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal(event) {
  if (event.target === closeModalBtn || event.target === listMenuItem) {
    modal.classList.add('is-hidden');
  } else modal.classList.toggle('is-hidden');
  /* document.body.classList.toggle('no-scroll'); */
}

listMenuItem.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    modal.classList.add('is-hidden');
  });
});
