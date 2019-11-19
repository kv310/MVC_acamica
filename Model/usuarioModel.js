function UsuarioModel() {
    this.usuarioEvent = new UsuarioEvent();
    this.usuarios = [];
}

UsuarioModel.prototype
.validarDatos = function(username, pass, passValidation, email) {
    validarEmailYUsernameRegistrado(username, email);
    validarPassword(pass, passValidation);
}

UsuarioModel.prototype
.registrarUsuario = function(username, pass, email) {
    try {
        //setItem(key, value)
        // el value tiene que ser un string

        //paso 1: obtengo el array de usuarios del sistema
        let usuarios = localStorage.getItem('usuarios') || "[]";
        // if(localStorage.get('usuarios') == undefined) {
        //     usuarios = [];
        // }

        //paso 2: lo convierto a array
        usuarios = JSON.parse(usuarios);

        //paso 3: pusheo el nuevo usuario
        usuarios.push(new Usuario(username, pass, email));

        //paso 4: lo vuelvo a guardar en la base como string
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        //Avisamos que el usuario se registro
        usuarioEvent.publicar();

    }
    catch(err) {
        console.error(err);
    }

}


function validarEmailYUsernameRegistrado(username, email) {
    // Paso 1: obtenemos los usuarios del sistema 
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Paso2: buscamos si hay un usuario con el mismo username
    // Por cada usuario del sistema, me fijo si el username coincide
    if(usuarios.find(usuario => usuario.username == username)) {
        throw new Error('El username ya existe');
    }

    if(usuarios.find(usuario => usuario.email == email)) {
        throw new Error('El email ya existe');
    }
}

function validarPassword(pass, passValidation) {
    if(pass != passValidation) {
        throw new Error('Las contraseñas no coinciden');
    }
}