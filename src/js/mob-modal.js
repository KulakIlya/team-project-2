
const openModalBtn = document.querySelector('.menu-mob-btn');
const closeModalBtn = document.querySelector('.close_menu_btn');
const listMenuItem = document.querySelector('.mob-menu-list');
console.log(listMenuItem);

const modal = document.querySelector('[data-modal]');


openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal(event) {
  if(event.target === closeModalBtn || event.target === listMenuItem  ){
    modal.classList.add('visually-hidden');
  }else modal.classList.toggle('visually-hidden');
  /* document.body.classList.toggle('no-scroll'); */
};

listMenuItem .querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    modal.classList.add('visually-hidden');
  });
});