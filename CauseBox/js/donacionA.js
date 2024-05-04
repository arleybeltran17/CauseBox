document.getElementById('Mascoticas').addEventListener('submit', function(event) {
    event.preventDefault();

// Obtener las credenciales ingresadas por el usuario
const Donacion = document.getElementById('CantidadDonacion').value;
const MetodoPago = document.getElementById('MetodoPago').value;

    alert("Muchas Gracias Por Tu Donacion Hacia Los Animales 🐶");
    console.log(Donacion,MetodoPago)

   

    let recaudado = Donacion; 
    let meta = 10000000; 

    document.getElementById('recaudado').textContent = recaudado;
    document.getElementById('meta').textContent = meta;
    const progreso = (recaudado / meta) * 100;

    const progressElement = document.querySelector('.progress');
        progressElement.style.width = `${progreso}%`;

    if (progreso >= 100) {
        progressElement.style.backgroundColor = 'blue';
    }

});

// Variables para lo recaudado y la meta a recaudar


