const registerForm = document.getElementById('form');
const nameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const userInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

//FUNCIONES LOCAL STORAGE

/*Me trae llos users del objeto users en el localStorage y me las pasa de json a objeto*/
const usersList = JSON.parse(localStorage.getItem('users')) || []; // si no hay nada me trairia nulo , por eso le diogo que me traiga un array vacio
console.log(usersList);

/*almacena cada user en el objeto usersen el localstorage pasandolo a json para su guardado*/
const saveUserList = () => {
    localStorage.setItem('users', JSON.stringify(usersList));
}


//FUNCIONES AUXILIARES
const showError = (input, msg) => {
    const formField = input.parentElement;// accedo al elemento padre
    const inputRectangule = formField.querySelector(".input__input");
    inputRectangule.classList.remove("success")
    inputRectangule.classList.add("error")

    const error = formField.querySelector("small");//acccedo por etiqueta
    error.style.display = 'block';
    error.textContent = msg;
}

const showSuccess = (input) => {
    const formField = input.parentElement;// accedo al elemento padre
    const inputRectangule = formField.querySelector(".input__input");
    inputRectangule.classList.remove("error")
    inputRectangule.classList.add("success")

    const error = formField.querySelector("small");//acccedo por etiqueta
    error.style.display = 'none';
    error.textContent = "";

}


const clearInputs = () => {
    nameInput.value = "";
    lastNameInput.value = "";
    userInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    passwordInput.value = "";

}

const isEmpty = (input) => {

    return input.value.trim().length === 0;

}

const isBetweenValues = (input, min, max) => {
    if (input.value.length < min || input.value.length > max) {
        return true;
    }
}
const isString = (input) => {
    const re = /^[A-Za-z\s]+$/;

    return re.test(input.value);
}
const isExistingUser = (input) => {
    return usersList.some((user) => user.user === input.value);
}

const isEmailOk = (input) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(input.value);
}

const isExistingEmail = (input) => {
    return usersList.some((user) => user.email === input.value);
}// Busco en el localstorage si ya hay registrado un mail igual a lo ingresado en el input con SOME
const isPasswordOk = (input) => {
    const re = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,25}$/;
    return re.test(input.value);

}

const isPhoneOk = (input) => {
    const re = /^(?:\+?54[\s.-]?)?(?:\d{2,4})[\s.-]?(\d{8})$/;
    return re.test(input.value);

}

//FUNCIÓN DE VALIDACIÓN
const checkImputText = (input) => {
    const minChar = 3;
    const maxChar = 28;

    if (isEmpty(input)) {
        showError(input, "Campo obligatorio");
        return false;

    }
    if (isBetweenValues(input, minChar, maxChar)) {
        showError(input, ` El valor ingresado debe tener entre ${minChar} y ${maxChar} caracteres`);
        return false;

    }
    if (!isString(input)) {
        showError(input, `El campo ${input.name} no acepta numeros`);
        return false;
    }
    showSuccess(input)
    return true;

}// end checkInputText

const checkUser = (input) => {
    const minChar = 3;
    const maxChar = 25;

    if (isEmpty(input)) {
        showError(input, "Campo obligatorio");
        return false;

    }
    if (isBetweenValues(input, minChar, maxChar)) {
        showError(input, ` El valor ingresado debe tener entre ${minChar} y ${maxChar} caracteres`);
        return false;

    }

    if (isExistingUser(input)) {
        showError(input, "Ya hay registrado un usuario con ese nombre");
        return false;

    }

    showSuccess(input)
    return true;

}// end checkUser

const checkEmail = (input) => {


    if (isEmpty(input)) {
        showError(input, "Campo obligatorio");
        return false;

    }
    if (!isEmailOk(input)) {

        showError(input, "El E-mail ingresado no es valido");
        return false;

    }

    if (isExistingEmail(input)) {
        showError(input, "Esta dirección de Email ya se encuentra registrada");
        return false;

    }
    showSuccess(input)
    return true;

}//edn checkEmail

const checkPassword = (input) => {
    if (isEmpty(input)) {
        showError(input, "Campo obligatorio");
        return false;

    }
    if (!isPasswordOk(input)) {

        showError(input, "Conraseña no valida. Debe tener al menos una mayuscula, un número, un caracter especial y entre 8 y 25 caracteress");
        return false;

    }
    showSuccess(input)
    return true;
}// end checkPassword

const checkPhone = (input) => {
    if (isEmpty(input)) {
        showError(input, "Campo obligatorio");
        return false;

    }
    if (!isPhoneOk(input)) {

        showError(input, "El número de teléfono ingresado no es válido");
        return false;

    }
    showSuccess(input)
    return true;
}// end checkPhone

const validateForm = (e) => {
    e.preventDefault();// no se refreshea la pagina al mandar form

    //validar inputs y guardar en localstorage
    // enviarlo a login
    const isNameValid = checkImputText(nameInput);
    const isLastNameValid = checkImputText(lastNameInput);
    const isEmailValid = checkEmail(emailInput);
    const isPasswordValid = checkPassword(passwordInput);
    const isPhoneNumberValid = checkPhone(phoneInput);
    const isUserValid = checkUser(userInput);

    const isFormValid =
        isNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isPasswordValid &&
        isPhoneNumberValid &&
        isUserValid;
    /*si todas las entradas son válidas, entonces el Form es válido y puedo guardar en el localStorage*/


    //LOCALSTORAGE
    if (isFormValid) {
        //creo objeto usuario
        const user = {
            name: nameInput.value,
            lastName: lastNameInput.value,
            user: userInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            password: passwordInput.value

        }
        usersList.push(user);
        saveUserList(usersList);
        alert("¡Bienvenido! Se ha registrado a Tesla Universidad en línea")

        //clearInputs();
        registerForm.reset();// resetea form. es un método de form html
        window.location.href = '../login.html';
    }
}





//MANDAR LOCALSTORAGE USERLIST A LA PAGINA LOGIN

// INIT
const initRegister = () => {
    registerForm.addEventListener('submit', validateForm);//validación
    //chequeo validacion en tiempo real con EVENTO INPUT
    /*
    El evento input es un evento que se dispara cuando el contenido de un elemento HTML de entrada, como un campo de texto (<input type="text>), un área de texto (<textarea>), o un campo de contraseña (<input type="password>), cambia debido a la interacción del usuario. Este evento se utiliza comúnmente para realizar acciones en tiempo real en respuesta a las entradas del usuario.
    */
    nameInput.addEventListener('input', () => checkImputText(nameInput));
    lastNameInput.addEventListener('input', () => checkImputText(lastNameInput));
    userInput.addEventListener('input', () => checkUser(userInput));
    emailInput.addEventListener('input', () => checkEmail(emailInput));
    phoneInput.addEventListener('input', () => checkPhone(phoneInput));
    passwordInput.addEventListener('input', () => checkPassword(passwordInput));

}

initRegister();