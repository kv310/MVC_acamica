var usuarioController = new UsuarioController();
var usuarioEvent = new UsuarioEvent();

// usuarioEvent.agregarSuscripcion(function() {  
//     alert('usuario registrado!');
// });

usuarioEvent.agregarSuscripcion(() => alert('usuario registrado!'));

document.getElementById('registerButton')
    .addEventListener('click', () => {

        // Destructuring
        [username, pass, passValidation, email] = obtenerDatosRegistro();
        try {
            usuarioController.registrarUsuario(username, pass, passValidation, email);
        }
        catch(error) {
            document.getElementById('errorMessage').innerText = error.message;
            document.getElementById('errorMessage').style.display = 'block';
        }
    });

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