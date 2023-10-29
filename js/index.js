/*VAR*/
//menu
const menuToggle = document.querySelector('.navBurguerMenu');
const menuMobile = document.querySelector('.navMenuWrapper')

//faqs
const faqsToggle = document.querySelectorAll('.faqsSubtitle');//aray
let faqsInfo = document.querySelectorAll('.faqsInformation');// array

/*Evento para menu  */
menuToggle.addEventListener('click', () => {
    menuMobile.classList.toggle('open');

});

/*Evento para faqs  */
faqsToggle.forEach(item => {// como faqsToggle e sun array, debo aplicar el evnto a c/u con un bucle
    item.addEventListener('click', (e) => {
        console.log(e.target.id);
        let j = e.target.id; // capturo id del elemento clickeado
        for (let i = 0; i < faqsInfo.length; i++) {// comparo con el array que contiene la lista de clasess faqsInfo
            if (i == j) {
                faqsInfo[i].classList.toggle('open');
            }
        }

    })
});