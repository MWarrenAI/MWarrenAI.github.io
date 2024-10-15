const navMenu = document.getElementById('nav-menu')
const navOpen = document.getElementById('nav-open')
const navClose = document.getElementById('nav-close')
const navItem = document.querySelectorAll('.nav_item')
navOpen.addEventListener('click', () => {
    navMenu.classList('nav__menu--open')
})
navItem.forEach(item => {
    item.addEventListener('click', () =>
        navMenu.classList.remove('nav__menu--open'))
})
const header = document.getElementById('l-header')
window.addEventListener('scroll', () => {
    if (window.scrollY > 50){
        header.classList.add('l-header--scroll')        
    } else {
        header.classList.remove('l-header--scroll')
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.querySelector('a[data-section="home"]');
    
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const closeModal = document.querySelector('.close');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch('https://formspree.io/f/mvgoobrr', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                successModal.style.display = 'block';
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        }).catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
        });
    });

    closeModal.addEventListener('click', function() {
        successModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == successModal) {
            successModal.style.display = 'none';
        }
    });
});