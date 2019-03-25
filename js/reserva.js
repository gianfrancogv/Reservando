var Reserva = function(horario, cantidadPersonas, precioPorPersona, codigoDescuento) {
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDescuento = codigoDescuento;
}

Reserva.prototype.obtenerPrecioBase = function() {
    return this.cantidadPersonas * this.precioPorPersona;    
}

Reserva.prototype.obtenerPrecioFinal = function(){
    var adicionales = this.obtenerPrecioBase()*0.1;
    var descuentos = this.precioPorPersona + this.obtenerPrecioBase()*0.15;
    return this.obtenerPrecioBase() + adicionales - descuentos;
}