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

sr.reveal(`.home-top`)
sr.reveal(`.home-bottom`)

sr.reveal(`.about__html`, { delay: 500, scale: 1.50, rotate: { z: 10 }, origin: 'right' })
sr.reveal(`.about__css`, { delay: 600, scale: 1, origin: 'right' })
sr.reveal(`.about__figma`, { delay: 400, scale: 1, origin: 'left', rotate: { z: -10 } })
sr.reveal(`.about__js`, { delay: 300, scale: 1, origin: 'left', rotate: { z: -10 } })

sr.reveal(`.contact__figma`, { delay: 500, scale: 1.50, rotate: { z: 10 }, origin: 'right' })
sr.reveal(`.contact__js`, { delay: 600, scale: 1, origin: 'right' })
sr.reveal(`.contact__flutter`, { delay: 400, scale: 1, origin: 'left', rotate: { z: -10 } })
sr.reveal(`.contact__react`, { delay: 300, scale: 1, origin: 'left', rotate: { z: -10 } })

sr.reveal(`.skills__title`)
sr.reveal(`.html_banner`, { delay: 500, origin: 'bottom' })
sr.reveal(`.css_banner`, { delay: 600, origin: 'bottom' })
sr.reveal(`.js_banner`, { delay: 700, origin: 'bottom' })
sr.reveal(`.flutter_banner`, { delay: 800, origin: 'bottom' })
sr.reveal(`.inkscape_banner`, { delay: 900, origin: 'bottom' })
sr.reveal(`.ppt_banner`, { delay: 800, origin: 'bottom' })
sr.reveal(`.word_banner`, { delay: 900, origin: 'bottom' })

sr.reveal(`.contact__container`, { origin: 'top' })
sr.reveal(`.footer`, { origin: 'bottom' })

document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".banners");

    if (!banner) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Scroll forward 1.5 seconds after the animations
                setTimeout(() => {
                    banner.scrollTo({
                        left: banner.scrollWidth,
                        behavior: "smooth"
                    });
                }, 1400);

                // Scroll back to start after 2.5 seconds
                setTimeout(() => {
                    banner.scrollTo({
                        left: 0,
                        behavior: "smooth"
                    });
                }, 1900);

                // Stop observing after first trigger (so it runs only once)
                observer.unobserve(banner);
            }
        });
    }, {
        threshold: 1 // triggers when 100% of the banner section is visible
    });

    observer.observe(banner);
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section"); // assumes each section has id="home", etc.
    const navLinks = document.querySelectorAll(".nav__list a");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // remove "active" from all
                navLinks.forEach(link => link.classList.remove("active"));

                // add "active" to the one that matches the visible section
                const activeLink = document.querySelector(`.nav__list a[href="#${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add("active");
            }
        });
    }, { threshold: 0.8 }); // triggers when 80% of section is visible

    sections.forEach(section => observer.observe(section));
});

const ProjectList = [{
    title: "WeatherNow", desc: "A Flutter-based weather application that provides real-time weather updates using the OpenWeather API. The app automatically detects the user’s current location and displays live weather details such as temperature, humidity, and wind speed. Users can also search for any city to check its weather conditions. Additionally, the app includes a 3-hour interval forecast, offering an accurate short-term outlook in a clean and responsive UI.",
    img: "assets/card1.png", getapk: "WeatherNow.apk", gitlink: "https://github.com/deepakssaa/weathernow",
},
{
    title: "Currency Convertor", desc: "A Flutter-based mobile application that provides real-time currency conversion using the Exchange Rate API. The app allows users to convert between INR and currencies from around 10 countries, displaying accurate and up-to-date exchange rates. It features a dynamic interface where the background flag changes according to the selected currency pair, enhancing visual clarity and user experience. The app is designed to be intuitive, responsive, and user-friendly, making currency conversion quick and accessible on both mobile and tablet devices.",
    img: "assets/card2.png", getapk: "CurrencyConvertor.apk", gitlink: "https://github.com/deepakssaa/currency_convertor"
},
{
    title: "Graphic Design Portfolio", desc: "A Flutter-based web application that showcases a curated collection of my graphic design work, including logos, posters, and social media posts. The designs are categorized for easy browsing, allowing users to quickly find specific types of projects. The app is fully responsive and optimized for both mobile phones and desktop screens, ensuring a seamless user experience across devices. Each design is presented with high-quality visuals, smooth navigation, and an intuitive layout, highlighting both creativity and professional presentation skills.",
    img: "assets/card3.png", gotolink: "https://designsmith.vercel.app", gitlink: "https://github.com/deepakssaa/GraphicDesignPortfolio"
}]

const template = document.querySelector("template.card_template");
const container = document.querySelector(".card_container");

ProjectList.forEach(item => {
    const card = template.content.cloneNode(true);
    card.querySelector("img").src = item.img;
    card.querySelector("h3").textContent = item.title;
    card.querySelector("p").textContent = item.desc;

    const gitButton = card.querySelector(".card_button");
    const visitBtn = card.querySelector(".go_to_web");
    const Buttons = card.querySelector(".card_buttons");
    const getapp = card.querySelector(".get-apk");

    if (item.getapk) {
        getapp.href = item.getapk;
        getapp.style.display = "inline-block"
        getapp.style.visibility = "visible";
    }
    else {
        getapp.style.display = "none";
    }

    if (item.gitlink) {
        gitButton.href = item.gitlink;
    }
    else {
        gitButton.href = "";
    }

    if (item.gotolink) {
        visitBtn.href = item.gotolink;
        visitBtn.style.display = "inline-block"
        visitBtn.style.visibility = "visible";
    } else {
        visitBtn.style.display = "none";
    }

    container.appendChild(card);
});