const menu = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => {
  nav.classList.toggle('open');
  menu.textContent = nav.classList.contains('open') ? 'CLOSE' : 'MENU';
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.textContent = 'MENU';
}));
