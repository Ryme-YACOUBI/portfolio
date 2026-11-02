const burger = document.getElementById('btn_burger');
const menu = document.getElementById('menu_list');

if (burger && menu) {
    burger.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        burger.setAttribute('aria-expanded', String(isOpen));
    });

    // Referme le menu après un clic sur un lien
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        });
    });
}