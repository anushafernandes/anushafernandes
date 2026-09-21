const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-links');

menu.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});
