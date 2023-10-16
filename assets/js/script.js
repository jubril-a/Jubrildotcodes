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

/*for (let project of projects) {
    project.addEventListener('mouseenter', () => {
        let projectInfo = Array.from(document.querySelectorAll('.project-info'));
        projectInfo.style.display = 'grid';
    })
}

for (let project of projects) {
    project.addEventListener('mouseleave', () => {
        let projectInfo = document.querySelector('.project-info');
        projectInfo.style.display = 'none';
    })
}*/

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        navBar.classList.add('sticky');
    }

    if (window.scrollY < window.innerHeight) {
        navBar.classList.remove('sticky');
    }
})

