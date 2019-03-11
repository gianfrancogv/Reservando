var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    this.horarios = this.horarios.filter(horario => horario !== horarioReservado);
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.sumatoria = function(calificaciones){
    var resultado = 0;
    for (var i = 0; i < calificaciones.length; i++) {
        resultado = resultado + calificaciones[i];
    }
    return resultado;
 }
 
 Restaurant.prototype.promedio = function(sumatoria, calificaciones){
    var promedio = sumatoria / calificaciones.length;
    return promedio;
 }

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        var suma = this.sumatoria(this.calificaciones);
        var promedio = this.promedio(suma, this.calificaciones);
        return Math.round(promedio * 10) / 10;
    }
 }
 
 
