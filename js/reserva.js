var Reserva = function(horario, cantidadPersonas, precioPorPersona, codigoDescuento) {
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDescuento = codigoDescuento;
}

// Obteniendo precio base:
Reserva.prototype.obtenerPrecioBase = function() {
    return this.cantidadPersonas * this.precioPorPersona;    
}

// Descuentos:
Reserva.prototype.descuentosCantidadPersonas = function() {
    if (this.cantidadPersonas >= 4 && this.cantidadPersonas <= 6) {
        return this.obtenerPrecioBase() * 0.05;
    } else if (this.cantidadPersonas >= 7 && this.cantidadPersonas <= 8) {
        return this.obtenerPrecioBase() * 0.1;
    } else if (this.cantidadPersonas > 8) {
        return this.obtenerPrecioBase() * 0.15;
    } else {
        return 0;
    }
}

Reserva.prototype.descuentosPorCodigo = function() {
    if (this.codigoDescuento === 'DES15') {
        return this.obtenerPrecioBase() * 0.15;
    } else if (this.codigoDescuento === 'DES200') {
        return 200;
    } else if (this.codigoDescuento === 'DES1') {
        return this.precioPorPersona;
    } else {
        return 0;
    }
}

Reserva.prototype.descuentos = function() {
    return this.descuentosCantidadPersonas() + this.descuentosPorCodigo();
}

// Adicionales:
Reserva.prototype.adicionalPorHora = function() {
    var hora = this.horario.getHours();
    if (hora >= 13 && hora <= 14 || hora >= 20 && hora <= 21) {
        return this.obtenerPrecioBase() * 0.05;
    } else {
        return 0;
    }
}

Reserva.prototype.adicionalPorDia = function() {
    var dia = this.horario.getDay();
    if (dia >= 5 && dia <= 7) {
        return this.obtenerPrecioBase() * 0.1;
    } else {
        return 0;
    }
}

Reserva.prototype.adicionales = function() {
    return this.adicionalPorDia() + this.adicionalPorHora();
}

// Obteniendo precio final:
Reserva.prototype.obtenerPrecioFinal = function(){
    return this.obtenerPrecioBase() + this.adicionales() - this.descuentos();
}