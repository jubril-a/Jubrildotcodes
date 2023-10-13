let mobileNav = document.querySelector('.mobile-nav');
let mobileNavIcon = document.querySelector('.mobile-nav-icon');
let primaryNav = document.querySelector('.primary-navigation');

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