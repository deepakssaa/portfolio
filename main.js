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

sr.reveal(`.skills__title`)
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
const ProjectList = [{
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
},
{
    title: "Graphic Design Portfolio",
    desc: "A Flutter-based web application showcasing my creative work including logos and posters. Fully responsive across devices with high-quality visuals.",
    img: "assets/card3.png",
    gotolink: "https://designsmith.vercel.app",
    gitlink: "https://github.com/deepakssaa/GraphicDesignPortfolio"
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
