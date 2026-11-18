const menu = document.getElementById('menuToggle'),
    nav = document.getElementById('navMenu');
menu.addEventListener('click', () => nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex');