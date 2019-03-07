var expect = chai.expect;

describe("Reservando horario", function(){

    it("El arreglo se mantiene igual, porque el restaurant no posee el horario", function(){
        listadoDeRestaurantes[0].reservarHorario("14:00");
        expect(listadoDeRestaurantes[0].horarios.length).to.eql(3);
    });

    it("El arreglo se mantiene igual, porque no se le pasa parámetro a la función", function(){
        listadoDeRestaurantes[0].reservarHorario();
        expect(listadoDeRestaurantes[0].horarios.length).to.eql(3);
    });
    
    it("El horario correspondiente se elimina del arreglo", function(){
        listadoDeRestaurantes[0].reservarHorario("13:00");
        expect(listadoDeRestaurantes[0].horarios).to.eql(["15:30", "18:00"]);
    });


});