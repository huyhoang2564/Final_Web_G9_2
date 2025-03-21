function toggleMenu(icon) {
        let menu = document.querySelector('.nav-menu');
        icon.name = icon.name === 'menu-outline' ? 'close-outline' : 'menu-outline';
        menu.classList.toggle('top-[-400px]');
        menu.classList.toggle('opacity-0');
        menu.classList.toggle('top-[70px]');
        menu.classList.toggle('opacity-100');
}
