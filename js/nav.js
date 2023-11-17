/*VAR*/
//menu
const menuToggle = document.querySelector('.navBurguerMenu');
const menuMobile = document.querySelector('.navMenuWrapper')
const closeMenu = document.querySelector('#closeMenu')
//carrito
const cartButton = document.querySelector('#cart');
const cartContainer = document.querySelector('.navCart__dropDown');
const cartItemsContainer = document.querySelector('.dropDown__item');
const cartClose = document.querySelector('#closeCart');
//usuario
const userButton = document.querySelector('#user');
const userContainer = document.querySelector('.navUser__dropDown');
const userClose = document.querySelector('#closeUser');


const logOutBtn = document.querySelector('#logout');
const userName = document.querySelector('#userName');


//const activeUser = JSON.parse(sessionStorage.getItem('activeuser'));

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

//------------
// const showUsername = () => {
//     userName.textContent = `${activeUser.user}`;
// }

const initNav = () => {

    menuToggle.addEventListener('click', openmenu);
    closeMenu.addEventListener('click', closemenu);
    cartButton.addEventListener('click', openCart);
    cartClose.addEventListener('click', openCart);
    userButton.addEventListener('click', openUser);
    userClose.addEventListener('click', openUser);

    // console.log(activeUser);

    // showUsername();

}

initNav();