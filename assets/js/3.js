document.querySelector("#myForm").addEventListener("submit", function(event) {
    let isValid = true;
  
    // Obtener todos los elementos input
    let inputs = document.querySelectorAll(".inputs");
  
    // Recorrer cada elemento input
    inputs.forEach(function(input) {
        // Verificar si el valor del input está vacío
        if (input.value.trim() === "") {
            isValid = false;
            input.style.borderColor = "red";
            input.placeholder = "Este campo es obligatorio";
        } else {
            input.style.borderColor = "";
            input.placeholder = "";
        }
    });
  
    // Validar el correo electrónico por separado
    let emailInput = document.querySelector("#correoElectronic");
    let emailValue = emailInput.value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailValue === "" || !emailPattern.test(emailValue)) {
        isValid = false;
        emailInput.style.borderColor = "red";
        emailInput.value = "";
        emailInput.placeholder = "Esto no es un email válido";
    } else {
        emailInput.style.borderColor = "";
        emailInput.placeholder = "";
    }
  
    // Validar la fecha de nacimiento
    let fechaNacimientoInput = document.querySelector("#fechaNacimiento");
    let fechaNacimientoValue = fechaNacimientoInput.value.trim();
  
    if (fechaNacimientoValue === "") {
        isValid = false;
        fechaNacimientoInput.style.borderColor = "red";
        fechaNacimientoInput.placeholder = "Ingrese una fecha de nacimiento válida";
    } else {
        fechaNacimientoInput.style.borderColor = "";
        fechaNacimientoInput.placeholder = "";
    }
  
    // Validar el país de residencia
    let paisResidenciaInput = document.querySelector("#paisResidencia");
    let paisResidenciaValue = paisResidenciaInput.value.trim();
  
    if (paisResidenciaValue === "") {
        isValid = false;
        paisResidenciaInput.style.borderColor = "red";
        paisResidenciaInput.placeholder = "Este campo es obligatorio";
    } else {
        paisResidenciaInput.style.borderColor = "";
        paisResidenciaInput.placeholder = "";
    }
  
    // Prevenir el envío del formulario si no es válido
    if (!isValid) {
        event.preventDefault();
    }
  });