

const text = /[A-Za-z Á-Úá-úñÑ]{3,20}/;

const form = document.getElementById("frmValidacion");
console.log(form);

const feedbackNombreOrganizacion = document.querySelector('#nombreOrganizacion .feedback') 

// Validación del nombre
form.nombreOrganizacion.addEventListener('input', (e) => {
    e.preventDefault();
  
    if (text.test(e.target.value)) {
      // Pasa la validación
      form.nombreOrganizacion.setAttribute("class", "success");
      feedbackNombreOrganizacion.style.display = 'none';
      feedbackNombreOrganizacion.style.visibility = "hidden";
      feedbackNombreOrganizacion.style.opacity = "0";
    } else {
      // No pasa la validación
      form.nombreOrganizacion.setAttribute("class", "error");
      feedbackNombreOrganizacion.style.visibility = "visible";
      feedbackNombreOrganizacion.style.display = 'block';
      feedbackNombreOrganizacion.style.color = 'black';
      feedbackNombreOrganizacion.style.opacity = "1";
      feedbackNombreOrganizacion.textContent = "solo puede tener letras de 1 a 10";
    }
  });


  