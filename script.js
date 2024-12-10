const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
