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

    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    // Event listeners
    window.addEventListener('scroll', handleHeaderScroll);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', setupHiddenElements);
    scrollToTopBtn.addEventListener("click", scrollToTop);

    // Initial setup
    setupHiddenElements();
});