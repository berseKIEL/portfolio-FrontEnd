/* --- Home --- */
/* === Constantes ===*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'), navClose = document.getElementById('nav-close');

/* === Mostrar Menu===*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        navToggle.style.display='none';
    })
}

/* === Ocultar Menu===*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navToggle.style.display='block';
    })
}

/* === Remover Menu al clickear === */
const navLink = document.querySelectorAll('.nav__link')

/* === Funcion sencilla que cuando al clickeas el menu se remueve === */
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
    navToggle.style.display='block';
}

navLink.forEach(n => n.addEventListener('click', linkAction))

 

// /* ---- Habilidades --- */
const tabs = document.querySelectorAll('[data-target]'), tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('habilidades__active')
        })

        target.classList.add('habilidades__active')

        tabs.forEach(tab => {
            tab.classList.remove('habilidades__active')
        })

        tab.classList.add('habilidades__active')
    })
})


/* === Cerrar y Abrir habilidades === */
const ContHab = document.getElementsByClassName('habilidades__contenido__dos'), HeaderHab = document.querySelectorAll('.habilidades__header')

function toggleHabilidad() {
    let itemClass = this.parentNode.className

    for(i = 0; i < ContHab.lenght; i++) {
        ContHab[i].className = 'habilidades__contenido__dos habilidades__cerradas'
    }
    if(itemClass == 'habilidades__contenido__dos habilidades__cerradas') {
        this.parentNode.className = 'habilidades__contenido__dos habilidades__abiertas'
    }

    else {
        this.parentNode.className = 'habilidades__contenido__dos habilidades__cerradas'
    }


}

HeaderHab.forEach((el) => {
    el.addEventListener('click',toggleHabilidad)
})

/* ------ Cambio de color por cada scroll que esta ------ */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })                                                                  
}
window.addEventListener('scroll', scrollActive)

/*--- cambiar color de header --- */
function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/* Color oscuro */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'moon' : 'sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
