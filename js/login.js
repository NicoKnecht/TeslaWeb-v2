const loginForm = document.querySelector(".loginn__form");
const mailLogin = document.getElementById("mail");
const passLogin = document.getElementById("password");
const errorMessage = document.getElementById("form__error");



/*Me trae llos users del objeto users en el localStorage y me las pasa de json a objeto*/
const usersList = JSON.parse(localStorage.getItem('users')) || [];

console.log(usersList);
//sessionStorage
// solo funciona al estar abierta la pestaña
const saveToSessionStorage = (user) => {
    sessionStorage.setItem('activeUser', JSON.stringify(user));
}

const activeUser = JSON.parse(sessionStorage.getItem('activeUser'));


//FUNCIONES AUXILIARES



const validateEmail = (input) => {
    return usersList.some(user => user.email === input.value.trim());// si con some encuentro un valor que coincida con el input

}

const validatePassword = (input) => {
    const user = usersList.find(user => user.email === mailLogin.value.trim());// busco al usuario con ese mail para comparar su contraseña
    console.log("user de funcion validatepassword" + user.password);
    return user.password === input.value.trim();
}

const showError = (msg) => {


    errorMessage.style.display = 'block';
    errorMessage.textContent = msg;
}

// Funcion validación
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


//FUNCIÓN login
const login = (e) => {
    e.preventDefault();
    console.log("entre a la funcion login");
    if (authenticateAcount()) {
        console.log("AUTENTICOOO");
        const user = usersList.find(user => user.email === mailLogin.value.trim());
        if (user) {// si no trae undefined
            console.log('usuario que va al sessionStorage', user);
            saveToSessionStorage(user);
            console.log("AUTENTICOOO y guardooooo");

            console.log(activeUser);
            loginForm.reset();
            window.location.href = '../index.html';
        }
    }
}




const initLogin = () => {
    loginForm.addEventListener('submit', login);
    if (activeUser) {//quiro loguearme, va al home si estoy ya logueado
        window.location.href = '../index.html';
    }
}
// cambio css pendiente para que  aparesca opcioned e usuario y log out


initLogin();
