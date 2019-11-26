var usuarioController = new UsuarioController();
var usuarioEvent = new UsuarioEvent();
var errorDiv = document.getElementById('errorMessage');

// usuarioEvent.agregarSuscripcion(function() {  
//     alert('usuario registrado!');
// });

usuarioEvent.agregarSuscripcion('register', () => alert('usuario registrado!'));


//Nueva fumcionalidad...

document.getElementById('loginButton')
    .addEventListener('click', () => {
        // Destructuring
        [username, pass] = obtenerDatosLogin();
        debugger;
        // User Friendly
        // Valido que los campos no sean null
        if(username && pass) {
            //Llamar al controller
            usuarioController.login(username, pass);    
        }
        else {
            mostrarError("Por favor complete los campos requeridos");
        }
        
});

document.getElementById('registerButton')
    .addEventListener('click', () => {

        // Destructuring
        [username, pass, passValidation, email] = obtenerDatosRegistro();
        try {
            usuarioController.registrarUsuario(username, pass, passValidation, email);
        }
        catch(error) {
            mostrarError(error.mensaje);
        }
    });

    function mostrarError(mensaje) {
        errorDiv.innerText = mensaje;
        errorDiv.style.display = 'block';
    }

    //Destructuring
    // var [a, ,b] = [1, 2, 3];
    // var [a, ...b] = [1, 2, 3];
    // console.log('hola', 'que', 'tal', 'todo', 'bien?');
    // function log(...mensajes) {

    // }

    // function(e) {

    // }

    function obtenerDatosRegistro() {

        let username = document.getElementById('userRegister').value;
        let pass = document.getElementById('passRegister').value;
        let passValidation = document.getElementById('passValidation').value;
        let email = document.getElementById('email').value;

        return [username, pass, passValidation, email];
    }

    function obtenerDatosLogin() {

        let username = document.getElementById('username').value;
        let pass = document.getElementById('pass').value;

        return [username, pass];
    }