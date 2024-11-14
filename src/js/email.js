const FORM = selectElement('#form');
const NAME = selectElement('#name');
const EMAIL = selectElement('#email');
const TOPIC = selectElement('#topic');
const MESSAGE = selectElement('#message');
const REGEXEMAIL = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

// Al cargar la página, escuchamos el evento input de cada input para remover el mensaje de validación personalizado
isWritingInput(NAME);
isWritingInput(EMAIL);
isWritingInput(TOPIC);
isWritingInput(MESSAGE);

FORM.addEventListener('submit', (e) => {
  // Prevenir el envio del formulario
  e.preventDefault();

  // Validamos cada input
  if (!validateName(NAME, 50)) return;
  if (!validateEmail(EMAIL, REGEXEMAIL)) return;
  if (!validateTopic(TOPIC, 50)) return;
  if (!validateMessage(MESSAGE, 300)) return;
  
  // Si todos los inputs son válidos, mostramos alerta y enviamos el formulario
  if (FORM.checkValidity()) {
    viewAlert();
    FORM.submit();
  }
});

function selectElement(element) {
  return document.querySelector(element);
}

function viewAlert() {
  const ALERT = selectElement('.alert');

  ALERT.classList.add('view');

  setTimeout(() => {
    ALERT.classList.remove('view');
  }, 5000);
}

function isWritingInput(input) {
  input.addEventListener('input', () => {
    input.setCustomValidity(''); // Quitamos el mensaje de validación personalizado
  });
}

function isInputFull(input) {
  if (input.value === '') {
    if (!input.hasAttribute('required')) {
      input.setAttribute('required', '');
    }

    input.reportValidity(); // Esto fuerza la validación inmediatamente

    return false;
  }

  return true;
}

function isInputLengthValid(input, maxLenght) {
  if (input.value.length > maxLenght) {
    input.setCustomValidity(`Este campo acepta un máximo de ${maxLenght} caracteres`);
    input.reportValidity(); // Esto fuerza la validación inmediatamente

    return false;
  }

  return true;
}

function isValidEmail(input, regexEmail) {
  if (input.value.match(regexEmail) === null) {
    input.setCustomValidity('Ingresa un correo electrónico válido');
    input.reportValidity(); // Esto fuerza la validación inmediatamente

    return false;
  }

  return true;
}

function validateName(input, maxLenght) {
  if (!isInputFull(input)) {
    return false;
  }

  if (!isInputLengthValid(input, maxLenght)) {
    return false;
  }

  return true;
}

function validateEmail(input, regexEmail) {
  if (!isInputFull(input)) {
    return false;
  }

  if (!isValidEmail(input, regexEmail)) {
    return false;
  }

  return true;
}

function validateTopic(input, maxLenght) {
  if (!isInputFull(input)) {
    return false;
  }

  if (!isInputLengthValid(input, maxLenght)) {
    return false;
  }

  return true;
}


function validateMessage(input, maxLenght) {
  if (!isInputFull(input)) {
    return false;
  }

  if (!isInputLengthValid(input, maxLenght)) {
    return false;
  }

  return true;
}