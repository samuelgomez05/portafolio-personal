// Revisamos si el formulario ha sido enviado y si es así, mostramos la alerta
if (sessionStorage.getItem('formSubmitted') === 'true') {
  viewAlert();
}

function viewAlert() {
  const ALERT = document.querySelector('.alert');

  ALERT.classList.add('view');

  // Despues de 5 segundos, eliminamos la alerta y la variable de sesión
  setTimeout(() => {
    ALERT.classList.remove('view');
    sessionStorage.removeItem('formSubmitted');
  }, 5000);
}