/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1800,
    delay: 300
})

sr.reveal(`.home__data`)
sr.reveal(`.about__container`)

sr.reveal(`.html`, { delay: 500, scale: 2, rotate: { z: -45 } })
sr.reveal(`.css`, { delay: 800, scale: 1.9, rotate: { z: 45 } })
sr.reveal(`.js`, { delay: 1200, scale: 1.5, rotate: { z: 115 } })
sr.reveal(`.flutter`, { delay: 1000, scale: 1.5, rotate: { z: 85 } })
sr.reveal(`.figma`, { delay: 800, scale: 1.8, rotate: { z: -85 } })
sr.reveal(`.react`, { delay: 1200, scale: 1.50, rotate: { z: -115 } })
sr.reveal(`.robo`, { delay: 100 })

sr.reveal(`.about__html`, { delay: 500, scale: 1.50, rotate: { z: 10 }, origin: 'right' })
sr.reveal(`.about__css`, { delay: 600, scale: 1, origin: 'right' })
sr.reveal(`.about__figma`, { delay: 400, scale: 1, origin: 'left', rotate: { z: -10 } })
sr.reveal(`.about__js`, { delay: 300, scale: 1, origin: 'left', rotate: { z: -10 } })

sr.reveal(`.skills__group-title`, { delay: 450 })
sr.reveal(`.skill__item`, { delay: 500, origin: 'bottom', interval: 100 })

sr.reveal(`.contact__container`, { origin: 'top' })
sr.reveal(`.footer`, { origin: 'bottom' })

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== DYNAMIC PROJECTS ====================*/
const ProjectList = [
    {
        title: "JustBins",
        desc: "Smart waste management platform that uses IoT-enabled bins, real-time monitoring, and AI-powered route optimization to improve collection efficiency, reduce operational costs, and prevent bin overflows in urban environments.",
        img: "assets/justbins_project.png",
        gotolink: "",
        gitlink: ""
    },
    {
        title: "Web Component Intelligence (WCI)",
        desc: "Computer vision pipeline for web UI component detection and classification with YOLO, ResNet18, and TorchScript deployment.",
        img: "assets/wci_project.png",
        gitlink: ""
    },
    {
        title: "Woo-commerce website",
        desc: "Developed a custom WooCommerce store with product variations, wishlist, razorpay checkout, inventory management, promotions, and a mobile-responsive design, helping the client generate approximately ₹10K in monthly revenue.",
        img: "assets/sujaweb.png",
        gotolink: "https://sujacreation.com",
    },
    {
        title: "E-commerce Mobile App",
        desc: "Built a cross-platform Flutter e-commerce app with WooCommerce integration, Razorpay payments, OTP authentication, and Firebase push notifications (server side scripted) for a seamless shopping experience. Published in playstore - 100+ installs",
        img: "assets/sujaapp.png",
        getapk: "https://play.google.com/store/apps/details?id=com.sujacreations.jewels",
        gitlink: ""
    },
    {
        title: "Automated Shipping Label Generator",
        desc: "Flask-based web utility that parses raw multi-block addresses into print-ready PDF shipping labels, featuring high-fidelity Tamil unicode font rendering via WeasyPrint and standalone desktop executable packaging.",
        img: "assets/shipping.png",
        gotolink: "https://address-bill-web-1.onrender.com",
        gitlink: ""
    },
    {
        title: "Speedy Food Pre-booking Platform",
        desc: "Built a production-grade food pre-booking platform using Spring Boot microservices and Java 17, Razorpay integration for 50% partial payments, JWT-based secure authentication, Netflix Eureka service discovery, Supabase integration.",
        img: "assets/speedy.png",
        gotolink: "",
        gitlink: ""
    },
    {
        title: "Graphic Design Portfolio",
        desc: "A Flutter-based web application showcasing my creative work including logos and posters. Fully responsive across devices with high-quality visuals.",
        img: "assets/card3.png",
        gotolink: "https://designsmith.vercel.app",
        gitlink: "https://github.com/deepakssaa/GraphicDesignPortfolio"
    },
    {
        title: "WeatherNow",
        desc: "A Flutter-based weather application that provides real-time weather updates using the OpenWeather API. Features include location detection, search by city, and a 3-hour interval forecast.",
        img: "assets/card1.png",
        getapk: "WeatherNow.apk",
        gitlink: "https://github.com/deepakssaa/weathernow",
    },
    {
        title: "Currency Convertor",
        desc: "A Flutter-based mobile application providing real-time currency conversion using the Exchange Rate API. Features dynamic flags and an intuitive interface for quick conversion.",
        img: "assets/card2.png",
        getapk: "CurrencyConvertor.apk",
        gitlink: "https://github.com/deepakssaa/currency_convertor"
    }]

const template = document.querySelector("template.card_template");
const container = document.querySelector("#projects .card_container");

if (template && container) {
    ProjectList.forEach(item => {
        const card = template.content.cloneNode(true);
        card.querySelector("img").src = item.img;
        card.querySelector("h3").textContent = item.title;
        card.querySelector("p").textContent = item.desc;

        const gitButton = card.querySelector(".card_button");
        const visitBtn = card.querySelector(".go_to_web");
        const getapp = card.querySelector(".get-apk");

        if (item.getapk) {
            getapp.href = item.getapk;
            getapp.style.display = "flex"
        } else {
            getapp.style.display = "none";
        }

        if (item.gitlink) {
            gitButton.href = item.gitlink;
        } else {
            gitButton.style.display = "none";
        }

        if (item.gotolink) {
            visitBtn.href = item.gotolink;
            visitBtn.style.display = "flex"
        } else {
            visitBtn.style.display = "none";
        }

        container.appendChild(card);
    });
}
