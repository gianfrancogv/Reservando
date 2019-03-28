var expect = chai.expect;
var test = listadoDeRestaurantes[0];

describe("Reservando horario:", function(){

    it("El arreglo de horarios se mantiene igual porque el restaurant no posee el horario", function(){
        test.reservarHorario("14:00");
        expect(test.horarios.length).to.eql(3);
    });

    it("El arreglo de horarios se mantiene igual porque no se le pasa parámetro a la función", function(){
        test.reservarHorario();
        expect(test.horarios.length).to.eql(3);
    });
    
    it("El horario correspondiente se elimina del arreglo de horarios porque cumple las condiciones", function(){
        test.reservarHorario("13:00");
        expect(test.horarios).to.eql(["15:30", "18:00"]);
    });

});

describe("Obteniendo puntuación:", function(){

    it("La puntuación es calculada correctamente", function(){
        var sumatoriaCalificaciones = 0;
        for (var i = 0; i < test.calificaciones.length; i++) {
            sumatoriaCalificaciones += test.calificaciones[i];
        }
        expect(test.obtenerPuntuacion()).to.eql(sumatoriaCalificaciones/test.calificaciones.length);
    });

    it("La puntuación es igual a cero ya que no tiene ninguna calificación", function(){
        if (test.calificaciones.length == 0){
           expect(test.obtenerPuntuacion()).to.be.eql(0);
        }
    });

});

describe("Función calificar():", function(){

    it("Se agrega una nueva calificación al restaurant correctamente", function(){
        test.calificar(9);
        expect(test.calificaciones[test.calificaciones.length - 1]).to.eql(9);
    });

});

describe("Función buscarRestaurante(id):", function(){

    it("Comparando el listado de restaurantes con la búsqueda mediante el id", function(){
        expect(listado.buscarRestaurante(1)).to.eql(test);
    });

});

describe("Obteniendo restaurant según filtro aplicado:", function(){

    it("Filtrando un restaurant con tres parámetros, esperando sea igual al restaurant elegido utilizando filter()", function(){
        expect(listado.obtenerRestaurantes("Asiática","Nueva York","18:00")[0]).to.eql(test);
    });

});

describe("Test de reservas: Reserva 1", function(){

    it("El precio base es igual a la cantidad de personas multiplicado por el precio por persona", function(){
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        expect(reserva1.obtenerPrecioBase()).to.eql(2800);
    });

    it("El precio final es igual al precio base más adicionales menos descuentos", function(){
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        expect(reserva1.obtenerPrecioFinal()).to.eql(2450);
    });

});

describe("Test de reservas: Reserva 2", function(){

    it("El precio base es igual a la cantidad de personas multiplicado por el precio por persona", function(){
        var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
        expect(reserva2.obtenerPrecioBase()).to.eql(300);
    });

    it("El precio final es igual al precio base más adicionales menos descuentos", function(){
        var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
        expect(reserva2.obtenerPrecioFinal()).to.eql(100);
    });

});