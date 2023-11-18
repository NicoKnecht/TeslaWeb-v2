const contactForm = document.getElementById('contactForm');
const contactNameInput = document.getElementById('contactName');
const contactLastnameInput = document.getElementById('contactLastname');
const contactEmailInput = document.getElementById('contactMail');
const contactPhoneInput = document.getElementById('contactPhone');
const contactMessageInput = document.getElementById('contactMsj');

// FUNCIONES DE VALIDACIÓN

const showError = (input, msg) => {
    const inputElement = input;
    inputElement.classList.remove("success");
    inputElement.classList.add("error");

    const error = inputElement.nextElementSibling;

    if (error && error.tagName === "SMALL") {
        error.classList.add("small");
        error.style.display = 'block';
        error.textContent = msg;
    }
};

const showSuccess = (input) => {
    const inputElement = input;
    inputElement.classList.remove("error");
    inputElement.classList.add("success");

    const error = inputElement.nextElementSibling;

    if (error && error.tagName === "SMALL") {
        error.classList.remove("small");
        error.style.display = 'none';
        error.textContent = "";
    }
};

const clearInputs = () => {
    contactNameInput.value = "";
    contactLastnameInput.value = "";
    contactEmailInput.value = "";
    contactPhoneInput.value = "";
    contactMessageInput.value = "";
}

const isEmpty = (input) => {
    return input.value.trim().length === 0;
}

const isBetweenValues = (input, min, max) => {
    return input.value.length < min || input.value.length > max;
}

const isEmailOk = (input) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(input.value);
}

const isPhoneOk = (input) => {
    const re = /^(?:\+?54[\s.-]?)?(?:\d{2,4})[\s.-]?(\d{8})$/;
    return re.test(input.value);
}

// FUNCIÓN DE VALIDACIÓN
const checkInputText = (input) => {
    const minChar = 3;
    const maxChar = 28;

    if (isEmpty(input)) {
        showError(input, "Campo obligatorio");
        return false;
    }

    if (isBetweenValues(input, minChar, maxChar)) {
        showError(input, `El valor ingresado debe tener entre ${minChar} y ${maxChar} caracteres`);
        return false;
    }

    showSuccess(input);
    return true;
}

const checkEmail = (input) => {
    if (isEmpty(input)) {
        showError(input, "Campo obligatorio");
        return false;
    }

    if (!isEmailOk(input)) {
        showError(input, "El E-mail ingresado no es válido");
        return false;
    }

    showSuccess(input);
    return true;
}

const checkPhone = (input) => {
    if (isEmpty(input)) {
        showError(input, "Campo obligatorio");
        return false;
    }

    if (!isPhoneOk(input)) {
        showError(input, "El número de teléfono ingresado no es válido");
        return false;
    }

    showSuccess(input);
    return true;
}

// FUNCIÓN DE VALIDACIÓN DEL MENSAJE
const checkMessage = (input) => {
    const minChar = 10;

    if (isEmpty(input)) {
        showError(input, "Campo obligatorio");
        return false;
    }

    if (input.value.length < minChar) {
        showError(input, `El mensaje debe tener al menos ${minChar} caracteres`);
        return false;
    }

    showSuccess(input);
    return true;
}

// FUNCIÓN DE VALIDACIÓN DEL FORMULARIO
const validateForm = (e) => {
    e.preventDefault();

    const isNameValid = checkInputText(contactNameInput);
    const isLastnameValid = checkInputText(contactLastnameInput);
    const isEmailValid = checkEmail(contactEmailInput);
    const isPhoneValid = checkPhone(contactPhoneInput);
    const isMessageValid = checkMessage(contactMessageInput);

    const isFormValid =
        isNameValid &&
        isLastnameValid &&
        isEmailValid &&
        isPhoneValid &&
        isMessageValid;

    if (isFormValid) {
        alert("¡Gracias por tu mensaje! Te responderemos pronto.");
        clearInputs();
    }
}

// EVENT
const initContact = () => {
    contactForm.addEventListener('submit', validateForm);
    contactNameInput.addEventListener('input', () => checkInputText(contactNameInput));
    contactLastnameInput.addEventListener('input', () => checkInputText(contactLastnameInput));
    contactEmailInput.addEventListener('input', () => checkEmail(contactEmailInput));
    contactPhoneInput.addEventListener('input', () => checkPhone(contactPhoneInput));
    contactMessageInput.addEventListener('input', () => checkMessage(contactMessageInput));
}

// Inicializar
initContact();
