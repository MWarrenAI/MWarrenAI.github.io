// Mobile Menu Toggle
const navMenu = document.getElementById('nav-menu'),
      navOpen = document.getElementById('nav-open'),
      navClose = document.getElementById('nav-close')

<<<<<<< HEAD
// Show menu
if(navOpen){
    navOpen.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
=======
document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.querySelector('a[href="#home"]');
    
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
>>>>>>> parent of 63f0271 (fix)

// Hide menu
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Hide menu when clicking on a nav item
const navLinks = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))