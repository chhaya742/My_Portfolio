// Auto scroll
document.body.style.overflowX = "hidden";

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scroll reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed(['Software Developer!','Web Developer!','MERN Stack Developer!','ReactJs Developer!','NodeJS Developer!'] , {
    strings: ['Data Analyst'],
    typeSpeed: 100,
    backSPeed: 100,
    backDelay: 1000,
    loop: true
});

// Reset form
// document.querySelector("form").addEventListener("reset", function () {
//     for (var i = 0; i < this.elements.length; i++) {
//         this.elements[i].value = "";
//     }
// });


// Read more

// $(document).ready(function(){
//     $(".invisible-content").hide();
//     $(document).on('click', "#btn", function(){
//         var moreLessButton=$(".invisible-content").is(":visible")?'Read More':'Read Less';
//         $(this).text(moreLessButton);
//         $(this).parent(".about-content").find(".invisible-content").toggle();
//         $(this).parent(".about-content").find(".visible-content").toggle();
//     });
// });