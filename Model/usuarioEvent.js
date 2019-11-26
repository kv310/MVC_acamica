function UsuarioEvent() {
    this.types = 
    {
        register: [],
        login: []
    };
}

UsuarioEvent.prototype.agregarSuscripcion = function(type, fn) {
    if(typeof fn === 'function') {
        this.types[type].push(fn);
    }
}

UsuarioEvent.prototype.publicar = function(type) {
    for(let fn of this.types[type]) {
        fn();
    }
}
