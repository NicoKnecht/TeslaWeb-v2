const loginForm = document.querySelector(".loginn__form");
const mailLogin = document.getElementById("mail");
const passLogin = document.getElementById("password");
const errorMessage = document.getElementById("form__error");
const userNameElement = document.getElementById("userName");

const usersList = JSON.parse(localStorage.getItem('users')) || [];

const saveToSessionStorage = (user) => {
    sessionStorage.setItem('activeUser', JSON.stringify(user));
}

const getActiveUser = () => {
    return JSON.parse(sessionStorage.getItem('activeUser')) || {};
}

const updateNavigationVisibility = (isLoggedIn) => {
    const loginItems = document.querySelectorAll('.navItem.enter, .navItem.login');
    const userAndCart = document.querySelector('.navUserAndCart');

    if (isLoggedIn) {
        loginItems.forEach(item => {
            item.style.display = 'none';
        });
        userAndCart.style.display = 'flex';
    } else {
        loginItems.forEach(item => {
            item.style.display = 'flex';
        });
        userAndCart.style.display = 'none';
    }
}

const validateEmail = (input) => {
    return usersList.some(user => user.email === input.value.trim());
}

const validatePassword = (input) => {
    const user = usersList.find(user => user.email === mailLogin.value.trim());
    return user && user.password === input.value.trim();
}

const showError = (msg) => {
    errorMessage.style.display = 'block';
    errorMessage.textContent = msg;
}

const authenticateAccount = () => {
    if (!validateEmail(mailLogin)) {
        showError('Los datos ingresados son incorrectos');
        return false;
    }

    if (!validatePassword(passLogin)) {
        showError('Los datos ingresados son incorrectos');
        loginForm.reset();
        return false;
    }

    errorMessage.textContent = '';
    return true;
}

const showUserName = (name) => {
    userNameElement.textContent = name;
}

const login = (e) => {
    e.preventDefault();

    if (authenticateAccount()) {
        const user = usersList.find(user => user.email === mailLogin.value.trim());
        if (user) {
            saveToSessionStorage(user);
            showUserName(user.name);
            updateNavigationVisibility(true);
            window.location.href = 'index.html';
        }
    }
}

const logout = () => {
    console.log("logout 1");
    sessionStorage.removeItem('activeUser');
    const activeUser = getActiveUser();
    if (!activeUser.name) {
        console.log("logout 2");
        showUserName("USER");
        updateNavigationVisibility(false);
        window.location.href = 'login.html';
    }
}

// login.js

const initLogin = () => {
    const activeUser = getActiveUser();

    if (activeUser.name) {
        showUserName(activeUser.name);
        updateNavigationVisibility(true);
    } else {
        updateNavigationVisibility(false);
    }


    /*sin el IF daba el sig error: login.js:107 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
at HTMLDocument.initLogin (login.js:107:15)*/
    if (loginForm) {
        loginForm.addEventListener('submit', login);
    }

    // Asegúrate de que el botón de salir esté presente antes de intentar agregar el evento
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        console.log("logout 0");
        logoutButton.addEventListener('click', logout);
    }
}

initLogin();


