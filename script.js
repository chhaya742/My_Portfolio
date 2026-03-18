// Prevent horizontal scroll
document.body.style.overflowX = "hidden";

// Toggle menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll active link & sticky header
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if(scrollY >= offset && scrollY < offset + height){
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
        }
    });

    // Sticky header
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', scrollY > 100);

    // Close navbar on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({ reset: true, distance: '80px', duration: 2000, delay: 200 });
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .technologies-content', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js
new Typed('.multiple-text', {
    strings: ['Software Developer!', 'Web Developer!', 'MERN Stack Developer!', 'React JS Developer!', 'Node JS Developer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});