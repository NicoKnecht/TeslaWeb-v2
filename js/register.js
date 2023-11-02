const registerForm = document.getElementById("form");
const nameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const userInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

//FUNCIONES AUXILIARES
const showError = () => {

}


//FUNCIÓN DE VALIDACIÓN
const checkImputText = (input) => {
    const minChar = 3;
    const maxChar = 28;

    if (!(input.value.trim().length)) {
        showError(input, "Campo obligatorio");
        return false;

    }
    if (input.length < minChar || input.length > maxChar) {
        showError(input, "El valor ingresado es demasiado corto o demasiado largo");
        return false;

    }

}

//FUNCIONES

const validateForm = (e) => {
    e.preventDefault();// no se refreshea la pagina al mandar form

    //validar inputs y guardar en localstorage
    // enviarlo a login
    const isNameValid = checkImputText(nameInput);

}


const init = () => {
    registerForm.addEventListener('submit', validateForm);//validación

}

init();