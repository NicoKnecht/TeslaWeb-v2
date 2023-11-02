/*VAR*/
//menu
const menuToggle = document.querySelector('.navBurguerMenu');
const menuMobile = document.querySelector('.navMenuWrapper')

//faqs
const faqsToggle = document.querySelectorAll('.faqsSubtitle');//aray
let faqsInfo = document.querySelectorAll('.faqsInformation');// array

//Localstorage 

//login&register


/*FUNCIONES */

//FUNCION PARA ABRIR MENU
const openmenu = () => {
    menuMobile.classList.toggle('open');

};

// abrir faqs en carreras
const openFaqs = (e) => {
    console.log(e.target.id);
    let j = e.target.id; // captura el ID del elemento clickeado
    for (let i = 0; i < faqsInfo.length; i++) {// compara con el array que contiene la lista de clases faqsInfo
        if (i == j) {
            faqsInfo[i].classList.toggle('open');
        }
    }
}



const init = () => {

    menuToggle.addEventListener('click', openmenu);
    faqsToggle.forEach(item => {
        item.addEventListener('click', openFaqs);
    });
}

init();