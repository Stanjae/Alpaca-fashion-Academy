const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const search = document.getElementById('search');
const drop = document.getElementById('drop');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

search.addEventListener('click', () => {
    drop.classList.toggle('hidden');
});
console.log("hello")