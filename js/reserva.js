var Reserva = function(horario, cantidadPersonas, precioPorPersona, codigoDescuento) {
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDescuento = codigoDescuento;
}

// Obteniendo precio base:
Reserva.prototype.obtenerPrecioBase = function() {
    var precioBase = 0;
    precioBase = this.cantidadPersonas * this.precioPorPersona;
    return precioBase;
}

// Descuentos:
Reserva.prototype.descuentosCantidadPersonas = function() {
    var descuento = 0;
    if (this.cantidadPersonas >= 4 && this.cantidadPersonas <= 6) {
        descuento = this.obtenerPrecioBase() * 0.05;
    } else if (this.cantidadPersonas >= 7 && this.cantidadPersonas <= 8) {
        descuento = this.obtenerPrecioBase() * 0.1;
    } else if (this.cantidadPersonas > 8) {
        descuento = this.obtenerPrecioBase() * 0.15;
    }
    return descuento;
}

Reserva.prototype.descuentosPorCodigo = function() {
    var descuento = 0;
    if (this.codigoDescuento == 'DES15') {
        descuento = this.obtenerPrecioBase() * 0.15;
    } else if (this.codigoDescuento == 'DES200') {
        descuento = 200;
    } else if (this.codigoDescuento == 'DES1') {
        descuento = this.precioPorPersona;
    }
    return descuento; 
}

Reserva.prototype.descuentos = function() {
    var descuento;
    descuento = this.descuentosCantidadPersonas() + this.descuentosPorCodigo();
    return descuento;
}

// Adicionales:
Reserva.prototype.adicionalPorHora = function() {
    var adicional = 0;
    var hora = this.horario.getHours();
    if (hora >= 13 && hora <= 14 || hora >= 20 && hora <= 21) {
        adicional = this.obtenerPrecioBase() * 0.05;
    } 
    return adicional;
}

Reserva.prototype.adicionalPorDia = function() {
    var adicional = 0;
    var dia = this.horario.getDay();
    if (dia >= 5 && dia <= 7) {
        adicional = this.obtenerPrecioBase() * 0.1;
    } 
    return adicional;
}

Reserva.prototype.adicionales = function() {
    var adicional;
    adicional = this.adicionalPorDia() + this.adicionalPorHora();
    return adicional;
}

// Obteniendo precio final:
Reserva.prototype.obtenerPrecioFinal = function(){
    var precioFinal = 0;
    precioFinal = this.obtenerPrecioBase() + this.adicionales() - this.descuentos();
    return precioFinal;
}