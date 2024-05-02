const menuNav = document.querySelector('.menu-tab');

const menu = document.querySelector('.menu');

menuNav.addEventListener('click', openMenuList);

function openMenuList(event) {
  if (event.currentTarget === menuNav) {
    menu.classList.toggle('is-hidden');
  }
}

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.add('is-hidden');
  });
});
