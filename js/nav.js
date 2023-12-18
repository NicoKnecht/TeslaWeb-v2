/*VAR*/
//menu
const menuToggle = document.querySelector('.navBurguerMenu');
const menuMobile = document.querySelector('.navMenuWrapper')
const closeMenu = document.querySelector('#closeMenu')
//cart
const cartButton = document.querySelector('#cart');
const cartContainer = document.querySelector('.navCart__dropDown');
const cartItemsContainer = document.querySelector('.dropDown__item');
const cartClose = document.querySelector('#closeCart');
//open cart courses
const totalCart = document.querySelector('.total__price');
const buyCartBtn = document.querySelector('.btn__add');
const emptyCartBtn = document.querySelector('.btn__deleteAll');
//contenedor de cursos en carrito
const cartCoursesContainer = document.querySelector('.dropDown__items');
let cart = [];// array que guardara info de lo añadido al carrito

//en pagina de cursos
const coursesContainerCart = document.querySelector(".cardsWrapper");
//course page
const addCoursetBtn = document.querySelector(".cardBtn");
//user
const userButton = document.querySelector('#user');
const userContainer = document.querySelector('.navUser__dropDown');
const userClose = document.querySelector('#closeUser');


const logOutBtn = document.querySelector('#logout');
const userName = document.querySelector('#userName');




/*FUNCIONES */

//FUNCION PARA ABRIR MENU
const openmenu = () => {
    menuMobile.classList.toggle('openMenu');
    closeMenu.style.display = 'block';

};
const closemenu = () => {
    menuMobile.classList.toggle('openMenu');
    closeMenu.style.display = 'none';

};

//FUNCION PARA ABRIR y cerrar carrito
const openCart = () => {
    cartContainer.classList.toggle('open');

};

const openUser = () => {
    userContainer.classList.toggle('open');

};


//template course cart
const courseCartTemplate = (course) => {
    const { img, title, price, id } = course;

    return `
    <div class="item" data-id="${id}">
    <img src=${img} class="item__img" alt=${title}>
    <div class="item__info">
        <h3 class="item__title">${title}</h3>

        <span class="item__price">${price}</span>
        <button class="item__delete">Eliminar</button>
    </div>

    `;
}

//
const renderCoursesCart = (cartList) => {
    cartCoursesContainer.innerHTML = ''; // Limpiar el contenido existente

    cartList.forEach(course => {
        const courseHtml = courseCartTemplate(course);// METE DATOS EN TEMPLATE
        cartCoursesContainer.insertAdjacentHTML('beforeend', courseHtml);//RENDERIZA
    });
    console.log(cart);

}
const addCourse = (e) => {
    if (e.target.classList.contains("cardBtn")) {
        const course = e.target.dataset;
        // agarro los dataset de la iNfo del curso que estan en el button
        if (!isExistingCourse(course)) {
            createCartCourse(course);//a grega a array
            renderCoursesCart(cart);
            showCartTotal();
            disableBtn(buyCartBtn);
            disableBtn(emptyCartBtn);
            showMessage();
            console.log("siii");

        }

    }


}
const showMessage = () => {
    const message = document.getElementById('message');
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 2000); // Oculta el mensaje después de 2000 milisegundos (2 segundos)
}

const createCartCourse = (course) => {
    cart = [...cart, { ...course }]// operador spread para copiar loq ue ya etsaba en el array


}
// funcio para saber su curso ya existe en carro

const isExistingCourse = (course) => {

    return cart.find((item) => item.id === course.id);
}


//funciones total,comprar y borrar carrito
const disableBtn = (btn) => {
    if (!cart.length) {
        btn.classList.add('disable');
    } else {
        btn.classList.remove('disable');
    }
}

const getCartTotal = () => {
    return cart.reduce((total, sum) => total + parseInt(sum.price.replace('$', ''), 10), 0);
}


const showCartTotal = () => {
    totalCart.innerHTML = `$ ${getCartTotal()}`;
}


const deleteAllCart = () => {
    const confirmation = confirm('¿Estás seguro de que quieres todos los productos del carrito?');
    if (confirmation) {
        cart = [];
        renderCoursesCart(cart);
        showCartTotal();
        disableBtn(buyCartBtn);
        disableBtn(emptyCartBtn);
    }
}

const deleteOneCourse = (e) => {
    if (e.target.classList.contains("item__delete")) {
        const courseId = e.target.closest('.item').dataset.id; // Obtén el ID del curso
        cart = cart.filter(course => course.id !== courseId); // Filtra el curso a eliminar del array
        renderCoursesCart(cart); // Vuelve a renderizar el carrito
        showCartTotal(); // Actualiza el total del carrito
        disableBtn(buyCartBtn);
        disableBtn(emptyCartBtn);
    }
}

const completeBuy = () => {

}

const initNav = () => {

    menuToggle.addEventListener('click', openmenu);
    closeMenu.addEventListener('click', closemenu);
    cartButton.addEventListener('click', openCart);
    cartClose.addEventListener('click', openCart);
    userButton.addEventListener('click', openUser);
    userClose.addEventListener('click', openUser);
    // window.addEventListener("scroll", openUser);// para cerrar al hacer scroll pero no es necesaria como esta implementado el sitio

    coursesContainerCart.addEventListener("click", addCourse);
    emptyCartBtn.addEventListener('click', deleteAllCart);
    cartCoursesContainer.addEventListener("click", deleteOneCourse);
    disableBtn(buyCartBtn);
    disableBtn(emptyCartBtn);

    // document.addEventListener("DOMContentLoaded", () => {
    //     renderCoursesCart(cart);
    // });


}

initNav();