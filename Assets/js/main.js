document.addEventListener('DOMContentLoaded', function() {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");
    const header = document.querySelector('.l-header');

    // Ham menu functionality
    if (hamMenu && offScreenMenu) {
        hamMenu.addEventListener("click", () => {
            hamMenu.classList.toggle("active");
            offScreenMenu.classList.toggle("active");
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('l-header--scroll');
        } else {
            header.classList.remove('l-header--scroll');
        }
    });

    // Smooth scrolling for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                const headerOffset = 80; // Adjust this value to match your header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Special case for home link (scrolling to top)
    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

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
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const headerOffset = 300;
                const elementPosition = aboutSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }

            // Close the ham menu if it's open
            if (offScreenMenu.classList.contains('active')) {
                hamMenu.classList.remove('active');
                offScreenMenu.classList.remove('active');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Show the modal
        successModal.style.display = 'block';

        // Hide the modal after 3 seconds
        setTimeout(function() {
            successModal.style.display = 'none';
        }, 3000);

        // Reset the form
        contactForm.reset();
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .hidden-right, .hidden-bottom');
hiddenElements.forEach((el) => observer.observe(el));

 // Scroll to top button functionality
 const scrollToTopBtn = document.getElementById("scrollToTopBtn");
 const rootElement = document.documentElement;

 function handleScroll() {
     // Show button when page is scrolled down
     const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
     if ((rootElement.scrollTop / scrollTotal) > 0.10) {
         scrollToTopBtn.classList.add("show");
     } else {
         scrollToTopBtn.classList.remove("show");
     }
 }

 function scrollToTop() {
     // Scroll to top smoothly
     rootElement.scrollTo({
         top: 0,
         behavior: "smooth"
     });
 }

 scrollToTopBtn.addEventListener("click", scrollToTop);
 document.addEventListener("scroll", handleScroll);