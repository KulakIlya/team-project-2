const menuNav = document.querySelector('.menu-tab');

const menuListSection = document.querySelector('.menu-list');

menuNav.addEventListener('click', openMenuList);

function openMenuList(event) {
  if (event.currentTarget === menuNav) {
    menuListSection.classList.toggle('is-hidden');
  }
  return;
}

menuListSection.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuListSection.classList.add('is-hidden');
  });
});
