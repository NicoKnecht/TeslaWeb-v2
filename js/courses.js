const coursesContainer = document.querySelector(".cardsWrapper");
const showMoreBtn = document.querySelector(".vermas");


//FUCNIONES

//logica render
const renderCourses = (coursesList) => {
    coursesContainer.innerHTML += coursesList.map(course => createCourseTemplate(course)).join("");// con += me va agregando para el boton ver mas
}

const createCourseTemplate = (course) => {
    const { id, link, img, alt, title } = course;
    console.log(id);
    return `
    <div class="card" id=${id} href=${link}>
    <div class="cardImg">
        <img class="img" src= ${img} alt=${alt}>
    </div>
    <a class="cardTitle">
        <h3 class="title" href=${link}>
        ${title}
        </h3>
    </a>
    <button 
    class="cardBtn" data-id='${id}'
    data-id='${link}'
    data-id='${img}'
    data-id='${alt}'
    data-id='${title}'
    >Agregar al carrito
    </button>
</div>

    `;
}

const showMoreCourses = () => {
    appState.currentCourseIndex += 1;
    const { courses, currentCourseIndex, courseLimit } = appState;
    renderCourses(courses[currentCourseIndex]);// ver en data.js
    if (currentCourseIndex === courseLimit - 1) {
        showMoreBtn.classList.add('hidden');

    }

}

// logica de filtros
const initCourses = () => {
    renderCourses(appState.courses[appState.currentCourseIndex]);
    showMoreBtn.addEventListener('click', showMoreCourses);

}

initCourses();
