const coursesContainer = document.querySelector(".cardsWrapper");
const showMoreBtn = document.querySelector(".vermas");
const categoriesContainer = document.querySelector(".filterButtons");
const categoriesList = document.querySelectorAll(".filterBtn");

//FUCNIONES

//logica render
const renderCourses = (coursesList) => {
    coursesContainer.innerHTML += coursesList.map(course => createCourseTemplate(course)).join("");// con += me va agregando para el boton ver mas
}

const createCourseTemplate = (course) => {
    const { id, link, img, alt, title, category } = course;
    console.log(id);
    return `
    <div class="card" id=${id} href=${link}>
    <div class="cardImg">
        <img class="img" src= ${img} alt=${alt}>
    </div>
    <a class="cardTitle" href=${link}>
        <h3 class="title">
        ${title}
        </h3>
    </a>
    <button 
    class="cardBtn" data-id='${id}'
    data
    data-link='${link}'
    data-img='${img}'
    data-alt='${alt}'
    data-title='${title}'
    data-category= '${category}'
    >Agregar al carrito
    </button>
</div>

    `;
}

const showMoreCourses = () => {
    appState.currentCourseIndex += 1;
    const { courses, currentCourseIndex, courseLimit, activeFilter } = appState;

    renderCourses(courses[currentCourseIndex]);// ver en data.js -> RENDERIZA POR PARTES
    if (currentCourseIndex === courseLimit - 1) {
        showMoreBtn.classList.add('hidden');

    }

}

//logica de filtros

const changeFilterState = (element) => {
    console.log(element);
    appState.activeFilter = element.target.dataset.category;

}
const resetRender = () => {
    coursesContainer.innerHTML = "";
}

const renderFilteredCourses = () => {
    const { activeFilter } = appState;
    if (activeFilter !== 'todos') {
        const filteredCourses = coursesData.filter((course) => course.category === activeFilter);
        resetRender();
        renderCourses(filteredCourses);
    } else {// para ver todos
        resetRender();
        renderCourses(coursesData);
        showMoreBtn.classList.add('hidden');
    }

}


const applyFilter = (target) => {// es como ponere.target// esta desestructurado directamente
    changeFilterState(target);
    renderFilteredCourses();

}





const initCourses = () => {
    renderCourses(appState.courses[appState.currentCourseIndex]);// PARA QUE AL CARGAR LA PAGINA, MUESTRE LOS 6 PRIMEROS CURSOS 
    showMoreBtn.addEventListener('click', showMoreCourses);// VER MAS
    categoriesContainer.addEventListener('click', applyFilter);// FILTROS
}

initCourses();
