const usuarios = [
    { nombreUsuario: 'usuario1', apellido:"Noc1", numero:"23214", correo:"usuario1@gmail.com" , contraseña: '123456' },
    { nombreUsuario: 'usuario2', apellido:"Noc2", numero:"12312", correo:"usuario2@gmail.com" , contraseña: 'abcdef' }
];

function IniciarSesion(){
    console.log("Se accedio a la funcion De Inicio De Sesion")
document.getElementById('frmValidacion').addEventListener('submit', function(event) {
    event.preventDefault();

// Obtener las credenciales ingresadas por el usuario
const nombreUsuario = document.getElementById('nombreUsuario').value;
const contraseña = document.getElementById('contraseña').value;

// Obtener los datos de usuario almacenados en localStorage
const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios'));

// Validar las credenciales
const usuarioEncontrado = usuariosGuardados.find(usuario => usuario.nombreUsuario === nombreUsuario && usuario.contraseña === contraseña);
if (usuarioEncontrado) {
    // Si las credenciales son válidas, el usuario ha iniciado sesión con éxito
    alert("Inicio de sesión exitoso");
    window.location.href = "Catalogo.html";
} else {
    // Si las credenciales no son válidas, mostrar un mensaje de error
    alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
}
});
}


function Registrar(){
    document.getElementById('frmValidacion').addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Obtener los valores del formulario
        const nombreUsuario = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const apellido = document.getElementById('apellido').value;
        const numero = document.getElementById('numero').value;
        const contraseña = document.getElementById('contraseña').value;
    
        // Crear un objeto de usuario
        const nuevoUsuario = {
            nombreUsuario: nombreUsuario,
            apellido: apellido,
            numero: numero,
            email: email,
            contraseña: contraseña
        };
    
        // Agregar el nuevo usuario al arreglo de usuarios
        usuarios.push(nuevoUsuario);
        console.log(usuarios)
    
        // Mostrar un mensaje de confirmación
        alert("Registro Exitosoo!!")
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        window.location.href = "Catalogo.html"
    
        // Puedes limpiar el formulario después de registrar al usuario si lo deseas
        document.getElementById('registro-form').reset();
})
}