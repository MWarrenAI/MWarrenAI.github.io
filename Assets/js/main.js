document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.querySelector('.nav__menu');
    const navOpen = document.querySelector('.nav__open');
    const navClose = document.querySelector('.nav__close');

    // Function to show the menu
    const showMenu = () => {
        navMenu.classList.add('show-menu');
    }

    // Function to hide the menu
    const hideMenu = () => {
        navMenu.classList.remove('show-menu');
    }

    // Event listener for opening the menu
    if (navOpen) {
        navOpen.addEventListener('click', showMenu);
    }

    // Event listener for closing the menu
    if (navClose) {
        navClose.addEventListener('click', hideMenu);
    }

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', hideMenu);
    });
});
const header = document.getElementById('l-header')
window.addEventListener('scroll', () => {
    if (window.scrollY > 50){
        header.classList.add('l-header--scroll')        
    } else {
        header.classList.remove('l-header--scroll')
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.l-header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
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