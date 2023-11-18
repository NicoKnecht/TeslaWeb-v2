const loginForm = document.querySelector(".loginn__form");
const mailLogin = document.getElementById("mail");
const passLogin = document.getElementById("password");
const errorMessage = document.getElementById("form__error");
const userNameElement = document.getElementById("userName");

// Me trae los usuarios del objeto users en el localStorage y los convierte de JSON a objeto
const usersList = JSON.parse(localStorage.getItem('users')) || [];

// sessionStorage
// solo funciona al estar abierta la pestaña
const saveToSessionStorage = (user) => {
    sessionStorage.setItem('activeUser', JSON.stringify(user));
}

const activeUser = JSON.parse(sessionStorage.getItem('activeUser')) || {};

// FUNCIONES AUXILIARES
const validateEmail = (input) => {
    return usersList.some(user => user.email === input.value.trim());
}

const validatePassword = (input) => {
    const user = usersList.find(user => user.email === mailLogin.value.trim());
    return user.password === input.value.trim();
}

const showError = (msg) => {
    errorMessage.style.display = 'block';
    errorMessage.textContent = msg;
}

const authenticateAcount = () => {
    if (!validateEmail(mailLogin)) {
        showError('Los datos ingresados son incorrectos');
        return false;
    }

    if (!validatePassword(passLogin)) {
        showError('Los datos ingresados son incorrectos');
        loginForm.reset();
        return false;
    }

    alert("Login exitoso");
    errorMessage.textContent = '';
    return true;
}

const showUserName = (name) => {
    userNameElement.textContent = name;
}

// HACER QUE CAMBIE EL SCSS COMPLETO! QUIZAS CON UN TOGGLE DE OTRA CLASE, ASI SOLO CAMBIA LA LINEA DELÑ MENU DE LOGIN
const hideLoginOptions = () => {
    const loginItems = document.querySelectorAll('.navItem.enter, .navItem.login');
    loginItems.forEach(item => {
        item.style.display = 'none';
    });
}

const showLoginOptions = () => {
    const loginItems = document.querySelectorAll('.navItem.enter, .navItem.login');
    loginItems.forEach(item => {
        item.style.display = 'flex';
    });
}

const showUserAndCart = () => {
    const userAndCart = document.querySelector('.navUserAndCart');
    userAndCart.style.display = 'flex';
}

const hideUserAndCart = () => {
    const userAndCart = document.querySelector('.navUserAndCart');
    userAndCart.style.display = 'none';
}

const login = (e) => {
    e.preventDefault();
    console.log("entre a la funcion login");
    if (authenticateAcount()) {
        console.log("AUTENTICOOO");
        const user = usersList.find(user => user.email === mailLogin.value.trim());
        if (user) {
            console.log('usuario que va al sessionStorage', user);
            saveToSessionStorage(user);
            showUserName(user.name);
            hideLoginOptions();
            showUserAndCart();
            console.log("AUTENTICOOO y guardooooo");
            // loginForm.reset();
            // window.location.href = '../index.html';
        }
    }
}

const logout = () => {
    sessionStorage.removeItem('activeUser');
    userNameElement.textContent = "USER";
    showLoginOptions();
    hideUserAndCart();
    window.location.href = '../login.html';
}

const initLogin = () => {
    loginForm.addEventListener('submit', login);
    document.getElementById("logout").addEventListener('click', logout);

    if (activeUser.name) {
        console.log(activeUser);
        showUserName(activeUser.name);
        hideLoginOptions();
        showUserAndCart();
    }
}

initLogin();
