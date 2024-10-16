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
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const yOffset = -headerHeight - 20; // Adjust this value to fine-tune the scroll position
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({top: y, behavior: 'smooth'});

                // Close the ham menu if it's open
                if (offScreenMenu.classList.contains('active')) {
                    hamMenu.classList.remove('active');
                    offScreenMenu.classList.remove('active');
                }
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
    const aboutSection = document.getElementById('about');

    if (aboutLink && aboutSection) {
        aboutLink.addEventListener('click', function(e) {
            e.preventDefault();
            const headerHeight = header.offsetHeight;
            const aboutOffset = aboutSection.offsetTop;
            const extraOffset = 150; // Adjust this value as needed

            window.scrollTo({
                top: aboutOffset - headerHeight - extraOffset,
                behavior: 'smooth'
            });

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
        
        // Here you would normally send the form data to your server
        // For this example, we'll just show the success modal

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