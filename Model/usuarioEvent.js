function UsuarioEvent() {
    this.suscripciones = [];
}

UsuarioEvent.prototype.agregarSuscripcion = function(fn) {
    if(typeof fn === 'function') {
        this.suscripciones.push(fn);
    }
}

UsuarioEvent.prototype.publicar = function() {
    for(let fn of this.suscripciones) {
        fn();
    }
}
