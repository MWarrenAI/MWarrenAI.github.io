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