const page = document.querySelector('html');
const themeBtn = document.querySelector('#theme-switcher');

function toggleTheme(theme=null) {
    if(theme === 'light'){
        page.classList.remove('dark');
        page.classList.add('light');
        localStorage.theme = 'light'
    }
    else if(theme === 'dark'){
        page.classList.remove('light');
        page.classList.add('dark');
        localStorage.theme = 'dark'
    }
    else{
        if(localStorage.theme === 'dark'){
            toggleTheme('light');
            return
        }
        else if(localStorage.theme === 'light'){
            toggleTheme('dark');
            return
        }
    }
}

function init() {
    console.debug("Initialized JS");

    // Initialize theme
    if(localStorage.theme){
        toggleTheme(localStorage.theme);
    } else {
        toggleTheme('dark');
    }
}

init();