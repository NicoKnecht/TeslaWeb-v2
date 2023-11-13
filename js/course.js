/*VAR*/


//faqs
const faqsToggle = document.querySelectorAll('.faqsSubtitle');//aray
let faqsInfo = document.querySelectorAll('.faqsInformation');// array



/*FUNCIONES */

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



const initCourse = () => {

    faqsToggle.forEach(item => {
        item.addEventListener('click', openFaqs);
    });
}

initCourse();