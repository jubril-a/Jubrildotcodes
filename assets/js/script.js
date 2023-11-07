let navBar = document.querySelector(".nav-bar");
let mobileNav = document.querySelector('.mobile-nav');
let mobileNavIcon = document.querySelector('.mobile-nav-icon');
let primaryNav = document.querySelector('.primary-navigation');
let mainSections = document.querySelectorAll(".mains");
let navLinks = document.querySelectorAll(".primary-navigation a");

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

mainSections.forEach((section) => {
    window.addEventListener('scroll', () => {
        let sectionLink = document.querySelector(`[href="#${section.id}"]`); 
        let sectionPos = section.getBoundingClientRect();
        let current = document.querySelector('.active');

        if (sectionPos.top < window.innerHeight && sectionPos.top >= 0) {
            current.classList.remove('active')
            sectionLink.classList.add('active')
        }
    })    
})

let sectionHeadings = document.querySelectorAll("h2");
let infos = document.querySelectorAll("info-zoom");


function slideIn() {
    for (let sectionHeading of sectionHeadings) {
        if (sectionHeading.getBoundingClientRect().top < window.innerHeight) {
            sectionHeading.classList.add("animate__animated");
            sectionHeading.classList.add("animate__backInLeft");
        }
    }
}

window.addEventListener('scroll', slideIn);

let hero = document.querySelector(".hero");
let bgToggle = document.querySelector(".change-bg i");
let root = document.querySelector(':root');

bgToggle.addEventListener('click', () => {

    if (bgToggle.classList.contains("toggle")) {
        root.style.setProperty("--main-bg-color", "yellow");
        bgToggle.classList.remove("toggle");
    } else {
        root.style.setProperty("--main-bg-color", "orange");
        bgToggle.classList.add("toggle");
    }
})

let projects = document.querySelectorAll('.project');
let projectsContainer = document.querySelector(".projects-container");

const projectInfo = {
    "Project 1": {
        id: 1,
        "project-name": "ChowNow Ordering",
        "main-image": "project-1.jpg",
        "display-images": ["display-project-1-1.jpg", "display-project-1-2.jpg", "display-project-1-3.jpg"],
        "tech-stack": ["ReactJs", "Python"],
        "short-description": "ChowNow is a commission-free online ordering system and food ordering app helping restaurants feed their hungry customers.",
        "live-site-url": "https://direct.chownow.com/direct/195/locations/260"
    },
    "Project 2": {
        id: 2,
        "project-name": "ChowNow Discover",
        "main-image": "project-2.jpg",
        "display-images": ["display-project-2-1.jpg", "display-project-2-2.jpg", "display-project-2-3.jpg"],
        "tech-stack": ["ReactJs", "Python"],
        "short-description": "ChowNow Discover is a platform that lets customers discover new local restaurants and provides business owners with tools to convert first time orders into lifelong diners.",
        "live-site-url": "https://eat.chownow.com/"
    },
    "Project 3": {
        id: 3,
        "project-name": "NewRelic.com",
        "main-image": "project-3.jpg",
        "display-images": ["display-project-3-1.jpg", "display-project-3-2.jpg", "display-project-3-3.jpg"],
        "tech-stack": ["ReactJs", "Flask", "AEM"],
        "short-description": "Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.",
        "live-site-url": "http://www.newrelic.com/"
    },
    "Project 4": {
        id: 4,
        "project-name": "Roambi",
        "main-image": "project-4.jpg",
        "display-images": ["display-project-4-1.jpg", "display-project-4-2.jpg", "display-project-4-3.jpg"],
        "tech-stack": ["Javascript"],
        "short-description": "Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.",
        "live-site-url": "http://www.roambi.com/"
    },
    "Project 5": {
        id: 5,
        "project-name": "WalkerTracker",
        "main-image": "project-5.jpg",
        "display-images": ["display-project-5-1.jpg", "display-project-5-2.jpg", "display-project-5-3.jpg"],
        "tech-stack": ["Javascript", "Ruby on Rails"],
        "short-description": "Walker Tracker offers goal management, fitness tracking, and team competitions to companies for internal use. A Ruby on Rails and Javascript companion site for the Walker Tracker App. Features visual metrics and gamified progression system.",
        "live-site-url": ""
    },
    "Project 6": {
        id: 6,
        "project-name": "MyStand",
        "main-image": "project-6.jpg",
        "display-images": ["display-project-6-1.jpg", "display-project-6-2.jpg", "display-project-6-3.jpg"],
        "tech-stack": ["Javascript", "Node.js"],
        "short-description": "MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.",
        "live-site-url": ""
    },
    "Project 7": {
        id: 7,
        "project-name": "NeverSurrender",
        "main-image": "project-7.jpg",
        "display-images": ["display-project-7-1.jpg", "display-project-7-2.jpg", "display-project-7-3.jpg"],
        "tech-stack": ["Javascript"],
        "short-description": "NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.",
        "live-site-url": ""
    },
    "Project 8": {
        id: 8,
        "project-name": "Powur",
        "main-image": "project-8.jpg",
        "display-images": ["display-project-8-1.jpg", "display-project-8-2.jpg", "display-project-8-3.jpg"],
        "tech-stack": ["Angular", "Ruby on Rails"],
        "short-description": "Powur is a marketing platform for lead generation, recruitment, and team building. Built with Ruby on Rails and Angular-UI. Makes use of Angular-material for front-end visuals. Features complex user tree heiarchy and commission system.",
        "live-site-url": "http://www.powur.com/with/42"
    },
    "Project 9": {
        id: 9,
        "project-name": "The Mall",
        "main-image": "project-9.jpg",
        "display-images": ["display-project-9-1.jpg", "display-project-9-2.jpg", "display-project-9-3.jpg"],
        "tech-stack": ["React.js", "Node"],
        "short-description": "The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.",
        "live-site-url": ""
    }
}

function populateProjects(technology) {
    let projectDetails;

    if (technology == "all") {
        projectDetails = projectInfo;
    } else {
        // return details of projects whose tech stack contain technology arg
    }

    for (let project in projectDetails) {
        let projectElm = document.createElement("div");
        projectElm.classList.add("project");
        projectElm.classList.add("center-content");
        
        projectElm.style.backgroundImage = `url("assets/images/projects/${projectDetails[project]["main-image"]}")`;
        projectElm.addEventListener('mouseover', () => projectElm.style.backgroundImage = "none")
        projectElm.addEventListener('mouseout', () => projectElm.style.backgroundImage =
            `url("assets/images/projects/${projectDetails[project]["main-image"]}")`)
        
        projectElm.innerHTML = `
        <div class="project-info">
                <div class="project-description">
                    <h3>${projectDetails[project]["project-name"]}</h3>
                    <p class="tech-stack">${projectDetails[project]["tech-stack"]}</p>
                </div>
                <button id="${projectDetails[project]["id"]}" class="project-link">LEARN MORE</button>
            </div>
        `
        projectsContainer.appendChild(projectElm);
    }
}

//populateProjects("Angular");
populateProjects("all");

let openProjects = document.querySelectorAll(".project-link");
let closeProjects = document.querySelectorAll(".close");
let moreInfo = document.querySelector(".project-more");
let projectImages = document.querySelector(".project-images");
let projectXtra = document.querySelector(".project-xtra");
let activate = document.querySelectorAll(".nav-buttons button");
let nextProjectImage = document.querySelector(".next");
let prevProjectImage = document.querySelector(".prev");

for (let active of activate) {
    active.addEventListener('click', () => {
        currentActive = document.querySelector(".nav-buttons .active");
        currentActive.classList.remove("active");
        active.classList.add("active");
    })
}

for (let openProject of openProjects) {
    openProject.addEventListener("click", () => {
        let projectId = openProject.id;
        let project;

        for (obj in projectInfo) {
            if (projectInfo[obj].id == projectId) {
                project = obj;
                break
            }
        }

        xtraContent = `<div class="project-xtra">
            <h1 class="heading1">${projectInfo[project]["project-name"]}</h1>
            <p class="tech-stack">TECH STACK: ${projectInfo[project]["tech-stack"]}</p>
            <p class="description">${projectInfo[project]["short-description"]}</p>
            <a href="${projectInfo[project]["live-site-url"]}" class="live-url">VIEW SITE</a>
        </div>
        `
        projectXtra.innerHTML = xtraContent;
        let images = projectInfo[project]["display-images"];
       
        projectImages.style.backgroundImage = `url("assets/images/projects/${projectInfo[project]["display-images"][0]}")`;

        let currentImage = 0;

        nextProjectImage.addEventListener('click', () => {
            if (currentImage == 2) {
                currentImage = 0;
            } else {
                currentImage += 1; 
            }
            
            projectImages.style.backgroundImage = `url("assets/images/projects/${projectInfo[project]["display-images"][currentImage]}")`;
        })

        prevProjectImage.addEventListener('click', () => {
            if (currentImage == 0) {
                currentImage = 2;
            } else {
                currentImage -= 1; 
            }

            projectImages.style.backgroundImage = `url("assets/images/projects/${projectInfo[project]["display-images"][currentImage]}")`;
        })
        

        moreInfo.style.display = "grid";
    })
}

for (let closeProject of closeProjects) {
    closeProject.addEventListener('click', () => {
        moreInfo.style.display = "none";
    })    
}

let blogsContainer = document.querySelector(".blogs");

const blogs = {
    "Blog 1": {
        "blog-name": "Breaking Your Coder's Block",
        "date": "APRIL 29, 2016",
        "short": "At one time or another, as a developer, we've all found ourselves hopelessly stuck on a coding issue",
        "image": "blog-1.jpg",
        "url": "#blog-1-url"
    },
    "Blog 2": {
        "blog-name": "!Awake: This is Your Brain on Caffeine",
        "date": "MARCH 19, 2015",
        "short": "If there's one thing I can truly claim to be an expert on, it's staying awake. For five years I struggled to stay employed",
        "image": "blog-2.jpg",
        "url": "#blog-2-url"
    },
    "Blog 3": {
        "blog-name": "Getting a handle on Handlebars",
        "date": "MARCH 4, 2015",
        "short": "Here at EyeCue Lab we render most of our data-laden HTML pages in Handlebar templates",
        "image": "blog-3.jpg",
        "url": "#blog-3-url"

    },
    "Blog 4": {
        "blog-name": "5 Extensions for Your Chrome Toolbelt",
        "date": "FEBRUARY 23, 2015",
        "short": " If you're not using Google Chrome as a front-end web developer, you're missing out. Not only is Chrome the",
        "image": "blog-4.jpg",
        "url": "#blog-4-url"
    }
}

for (let blog in blogs) {
    blogContent =  `
    <div id="${blog}" class="blog__image"></div>
    <h3>${blogs[blog]["blog-name"]}</h3>
    <p class="date mb-100">${blogs[blog]["date"]}</p>
    <p>${blogs[blog]["short"]} ...</p>
    <a class="blog__link" href="${blogs[blog]["url"]}"></a>
    `;

    let blogELm = document.createElement('div');
    blogELm.classList.add('blog');
    blogELm.innerHTML = blogContent;
    blogsContainer.appendChild(blogELm);
}

let blogImages = document.querySelectorAll(".blog__image");

for (let blogImage of blogImages) {
    let blog = blogImage.id;
    blogImage.style.backgroundImage = `url('assets/images/blogs/${blogs[blog]["image"]}')`;
}


