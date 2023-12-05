const coursesContainer = document.querySelector(".cardsWrapper");

//FUCNIONES
const renderCourses = (coursesList) => {
    coursesContainer.innerHTML = coursesList.map(course => createCourseTemplate(course)).join("");
}

const createCourseTemplate = (course) => {
    const { id, link, img, alt, title } = course;
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


const initCourses = () => {
    renderCourses(coursesData);

}

initCourses();
