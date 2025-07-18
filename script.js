const mostrarBoton = document.getElementById("mostrarCrearCuenta");
const crearCuentaSection = document.getElementById("crear-cuenta-section");
const closeButton = document.getElementById("closeButton");
const overlay = document.getElementById("overlay");
const formularioCrearCuenta = crearCuentaSection.querySelector("form");

// Función para mostrar el pop-up
mostrarBoton.addEventListener("click", function(e) {
  e.preventDefault();
  crearCuentaSection.style.display = "block";
  overlay.style.display = "block";
});

// Función para ocultar el pop-up
closeButton.addEventListener("click", function() {
  crearCuentaSection.style.display = "none";
  overlay.style.display = "none";
});

// Ocultar el pop-up si se hace clic fuera de él (en el overlay)
overlay.addEventListener("click", function() {
  crearCuentaSection.style.display = "none";
  overlay.style.display = "none";
});

// Lógica de validación de contraseñas (la misma que antes)
formularioCrearCuenta.addEventListener("submit", function(e) {
  e.preventDefault();

  const nuevaClave = document.getElementById("nuevaClave").value;
  const confirmarClave = document.getElementById("confirmarClave").value;

  if (nuevaClave === confirmarClave) {
    alert("¡Cuenta creada con éxito! (En un entorno real, los datos se enviarían al servidor.)");
    crearCuentaSection.style.display = "none";
    overlay.style.display = "none";
    // Aquí podrías enviar los datos al servidor para crear la cuenta
    // e.g., this.submit();
  } else {
    alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
  }
});