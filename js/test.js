var expect = chai.expect;
var test = listadoDeRestaurantes[0];

describe("Reservando horario:", function(){

    it("El arreglo se mantiene igual, porque el restaurant no posee el horario", function(){
        test.reservarHorario("14:00");
        expect(test.horarios.length).to.eql(3);
    });

    it("El arreglo se mantiene igual, porque no se le pasa parámetro a la función", function(){
        test.reservarHorario();
        expect(test.horarios.length).to.eql(3);
    });
    
    it("El horario correspondiente se elimina del arreglo", function(){
        test.reservarHorario("13:00");
        expect(test.horarios).to.eql(["15:30", "18:00"]);
    });

});

describe("Obtener puntuación:", function(){

    it("Puntuación calculada correctamente", function(){
        var sumatoriaCalificaciones = 0;
        for (var i = 0; i < test.calificaciones.length; i++) {
            sumatoriaCalificaciones += test.calificaciones[i];
        }
        expect(test.obtenerPuntuacion()).to.eql(sumatoriaCalificaciones/test.calificaciones.length);
    });

    it("Puntuación igual a cero", function(){
        if (test.calificaciones.length == 0){
           expect(test.obtenerPuntuacion()).to.be.eql(0);
        }
    });

});

describe("Calificando restaurant:", function(){

    it("Se agrega una nueva calificación al restaurant", function(){
        test.calificar(9);
        expect(test.calificaciones.length).to.eql(6);
    });

});