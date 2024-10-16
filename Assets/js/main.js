document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");
    const header = document.querySelector('.l-header');
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const rootElement = document.documentElement;

    // Ham menu functionality
    if (hamMenu && offScreenMenu) {
        hamMenu.addEventListener("click", () => {
            hamMenu.classList.toggle("active");
            offScreenMenu.classList.toggle("active");
        });
    }

    // Header scroll effect
    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('l-header--scroll');
        } else {
            header.classList.remove('l-header--scroll');
        }
    }

    // Smooth scrolling function
    function smoothScroll(targetId, offset = 80) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Apply smooth scrolling to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScroll(targetId);
            
            // Close the ham menu if it's open
            if (offScreenMenu.classList.contains('active')) {
                hamMenu.classList.remove('active');
                offScreenMenu.classList.remove('active');
            }
        });
    });

    // Special case for home link (scrolling to top)
    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Close the ham menu if it's open
            if (offScreenMenu.classList.contains('active')) {
                hamMenu.classList.remove('active');
                offScreenMenu.classList.remove('active');
            }
        });
    }

    // Special case for about link
    const aboutLink = document.querySelector('a[href="#about"]');
    if (aboutLink) {
        aboutLink.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll('about', 300);
            
            // Close the ham menu if it's open
            if (offScreenMenu.classList.contains('active')) {
                hamMenu.classList.remove('active');
                offScreenMenu.classList.remove('active');
            }
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');

    if (contactForm && successModal) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            successModal.style.display = 'block';
            setTimeout(() => { successModal.style.display = 'none'; }, 3000);
            contactForm.reset();
        });
    }    

    // Scroll to top functionality
    function handleScroll() {
        const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if ((rootElement.scrollTop / scrollTotal) > 0.10) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    }

    // Special case for home link (scrolling to top)
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Close the ham menu if it's open
            if (offScreenMenu.classList.contains('active')) {
                hamMenu.classList.remove('active');
                offScreenMenu.classList.remove('active');
            }
        });
    }

    // Event listeners
    window.addEventListener('scroll', handleHeaderScroll);
    window.addEventListener('scroll', handleScroll);
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
        }

        window.addEventListener('click', function(event) {
            if (event.target == successModal) {
                successModal.style.display = 'none';
            }
        });
    }