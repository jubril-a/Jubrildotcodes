let navBar = document.querySelector(".nav-bar");
let mobileNav = document.querySelector('.mobile-nav');
let mobileNavIcon = document.querySelector('.mobile-nav-icon');
let primaryNav = document.querySelector('.primary-navigation');
let projects = document.querySelectorAll('.project');

mobileNav.addEventListener('click', () => {
    if (primaryNav.classList.contains('expanded')) {
        primaryNav.classList.remove('expanded');
        primaryNav.classList.add('collapsed');
        mobileNavIcon.classList.remove('fa-xmark');
        mobileNavIcon.classList.add('fa-bars');
    } else {
        primaryNav.classList.remove('collapsed');
        primaryNav.classList.add('expanded');
        mobileNavIcon.classList.remove('fa-bars');
        mobileNavIcon.classList.add('fa-xmark');
    }
})

function setNavPosition() {
    if (window.scrollY > window.innerHeight) {
        navBar.classList.add('sticky');
    }

    if (window.scrollY < window.innerHeight) {
        navBar.classList.remove('sticky');
    }
}

window.addEventListener('scroll', setNavPosition);
window.addEventListener('load', setNavPosition);

let sectionHeadings = document.querySelectorAll("h2");


function slideIn() {
    for (let sectionHeading of sectionHeadings) {
        if (sectionHeading.getBoundingClientRect().top < window.innerHeight) {
            sectionHeading.classList.add("animate__animated");
            sectionHeading.classList.add("animate__backInLeft");
        }
    }
}

window.addEventListener('scroll', slideIn)

