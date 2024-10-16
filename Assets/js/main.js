// Mobile Menu Toggle
const navMenu = document.getElementById('nav-menu'),
      navOpen = document.getElementById('nav-open'),
      navClose = document.getElementById('nav-close')

// Show menu
if(navOpen){
    navOpen.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav__link');
    const homeLink = document.querySelector('a[href="#home"]');
    const navMenu = document.getElementById('nav-menu');
    const navOpen = document.getElementById('nav-open');
    const navClose = document.getElementById('nav-close');
    const navItem = document.querySelectorAll('.nav_item');
    const header = document.getElementById('l-header');

    navOpen.addEventListener('click', () => {
        navMenu.classList.add('nav__menu--open');
    });

    navItem.forEach(item => {
        item.addEventListener('click', () =>
            navMenu.classList.remove('nav__menu--open'));
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('l-header--scroll');
        } else {
            header.classList.remove('l-header--scroll');
        }
    });
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    function linkAction() {
        navMenu.classList.remove('show-menu');
    }
    navLinks.forEach(n => n.addEventListener('click', linkAction));
});