function UsuarioController() {
    this.usuarioModel = new UsuarioModel();
}


UsuarioController.prototype.registrarUsuario = function(username, pass, passValidation, email) {

    try {
        this.usuarioModel.validarDatos(username, pass, passValidation, email);
        this.usuarioModel.registrarUsuario(username, pass, email);
        
    }
    catch(error) {
        throw error;
    }
}

UsuarioController.prototype.login = function(username, pass) {
    this.usuarioModel.validarDatosLogin(username, pass);
    this.usuarioModel.login(username);
}