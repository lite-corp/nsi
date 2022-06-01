const page = document.getElementsByTagName('html')[0];
const themeBtn = document.getElementById('theme-switcher');

const colorTags = ["a", "h2", "h3", "h4", "footer"]
var click_count = -1; // The theme is switched when the page is loaded

function toggleTheme(theme = null) {
    if (click_count == 10) {
        //document.getElementById("site-title").classList.add("color");
        for (let tags = 0; tags < colorTags.length; tags++) {
            items = document.getElementsByTagName(colorTags[tags])
            for (let i = 0; i < items.length; i++) {
                items[i].classList.add("color");
            }
        }
        theme = 'dark' // Set the theme one last time
        console.info("Life is now full of colors 🌈")

    } else if (click_count > 10)
        return;
    if (theme === 'light') {
        page.classList.remove('dark');
        page.classList.add('light');
        localStorage.theme = 'light'
    } else if (theme === 'dark') {
        page.classList.remove('light');
        page.classList.add('dark');
        localStorage.theme = 'dark'
    } else {
        if (localStorage.theme === 'dark') {
            toggleTheme('light');
            return;
        } else if (localStorage.theme === 'light') {
            toggleTheme('dark');
            return;
        }
    }
    click_count++;
}

function init() {
    // Initialize theme
    if (localStorage.theme) {
        toggleTheme(localStorage.theme);
    } else {
        const defaultDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        toggleTheme(defaultDark ? "dark" : "light");
    }

    // Message for the geeks out there
    console.info("%cSi vous voyez ce message, il n'y a pas de doute : vous devez choisir la spécialité NSI !!!", "color: green; text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000; font-size: 2em; font-weight: bold;");
}

init();