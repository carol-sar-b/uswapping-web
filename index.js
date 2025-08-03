'use stric'


const header = document.querySelector(`.Header`)
const menuAbrir = header.querySelector(`.Header-abrir`)
const nav = header.querySelector(`.Header-nav`)
const menuCerrar = header.querySelector(`.Header-cerrar`)
const caracteristicas = document.querySelectorAll(`.Section-caracteristicas-card`);
const bottonNext = document.querySelector(`.Inicio-actividades-next`);
const bottonBack = document.querySelector(`.Inicio-actividades-prev`);
const funcionamiento = document.querySelector(`.Section-funcionamiento-container`)
menuAbrir.addEventListener(`click`, () => {
    nav.classList.add(`Header-nav--visible`)
    document.body.classList.add('body--no-scroll')



})

menuCerrar.addEventListener(`click`, () => {
    nav.classList.remove(`Header-nav--visible`)
    document.body.classList.remove('body--no-scroll');
})


const slider = document.querySelector('.Inicio-actividades-slider');
const prevButton = document.querySelector('.Inicio-actividades-prev');
const nextButton = document.querySelector('.Inicio-actividades-next');
const actividad = document.querySelectorAll('.Inicio-actividad');
const numeroActividadesVisibles = 6;
let currentIndex = 0;
const totalActividades = 18;
console.log("Iniciando js")

const moverSlider = () => {
    const sliderWidth = actividad[0].offsetWidth + 20;
    slider.style.transition = 'transform 2s ease-in-out';
    slider.style.transform = `translateX(-${currentIndex * numeroActividadesVisibles * sliderWidth}px)`;

}

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 2;
    }
    moverSlider();
}
);

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= 3) {
        currentIndex = 0;

    }
    moverSlider();
}
);



const cards = document.querySelectorAll('.Section-caracteristicas-card');

cards.forEach((_, i) => {
    cards[i].addEventListener('mouseenter', () => {

        cards.forEach((_, j) => {
            cards[j].classList.remove('Section-caracteristicas-card-active');
        })
        cards[i].classList.add('Section-caracteristicas-card-active');
    })

    cards[i].addEventListener('mouseleave', () => {


        cards[i].classList.remove('Section-caracteristicas-card-active');
    })
})



const cardFuncionamiento = document.querySelectorAll('.Section-funcionamiento-card');
const imagenFuncionamiento = document.querySelector('.Section-funcionamiento-image');

cardFuncionamiento.forEach((_, i) => {
    cardFuncionamiento[i].addEventListener(`click`, () => {

        cardFuncionamiento.forEach((_, j) => {
            cardFuncionamiento[j].classList.remove('Section-funcionamiento-card-active');
        })

        cardFuncionamiento[i].classList.add('Section-funcionamiento-card-active');
        const imagenMostrar = cardFuncionamiento[i].getAttribute(`id`);
        imagenFuncionamiento.alt = imagenMostrar;
        imagenFuncionamiento.src = `./assets/${imagenMostrar}.webp`;
    })
})


const headerFixed = document.querySelector('.Header');
const sections = document.querySelectorAll('.Section');

function checkHeader() {
    const headerRect = header.getBoundingClientRect();
    let isOverSection = false;

    sections.forEach(section => {
        const sectionRect = section.getBoundingClientRect();
        if (
            headerRect.bottom > sectionRect.top &&
            headerRect.top < sectionRect.bottom
        ) {
            isOverSection = true;
        }
    });

    if (isOverSection) {
        headerFixed.classList.add('Header-bg-active');
    } else {
        headerFixed.classList.remove('Header-bg-active');
    }
}

window.addEventListener('scroll', checkHeader);
checkHeader();