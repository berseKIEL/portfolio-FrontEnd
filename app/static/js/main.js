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

/* ------ Realiza scroll al link activo desde un ID ------ */
const sections = document.querySelectorAll('seccion[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)