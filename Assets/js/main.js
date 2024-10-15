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

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var form = this;
    var formData = new FormData(form);

    fetch('https://formspree.io/f/mvgoobrr', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Show the success modal
            document.getElementById('successModal').style.display = "block";
            form.reset();
        } else {
            throw new Error('Form submission failed');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
    });
});

// Close the modal when clicking on <span> (x)
document.querySelector('.close').onclick = function() {
    document.getElementById('successModal').style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById('successModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}