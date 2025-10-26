const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const navLinks = document.querySelectorAll('.off-screen-menu .nav__link');

// Function to open/close the menu
function toggleMenu() {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
}

// Toggle menu on icon click
hamMenu.addEventListener('click', toggleMenu);

// Close menu when a link is clicked (for navigation within the page)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (offScreenMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Show the button after scrolling 400px down
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
}

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.project__card').forEach(card => {
    card.addEventListener('click', () => {
        const link = card.getAttribute('data-project-link');
        if (link) {
            window.open(link, '_blank');
        }
    });
});

const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const closeModal = document.querySelector('.close');

    if (contactForm && successModal) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);

            fetch('https://formspree.io/f/mvgoobrr', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    successModal.style.display = 'block';
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            }).catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting the form. Please try again.');
            });
        });

        if (closeModal) {
            closeModal.addEventListener('click', function() {
                successModal.style.display = 'none';
            });