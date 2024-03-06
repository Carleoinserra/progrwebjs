// classe di oggetto
class Car {
    constructor(name, year){
        this.name = name // valore ottenuto dal parametro;
        this.year = year;
    }
    
    stampa(){
        return "nome dell'auto: " + this.name + " Anno di immatricolazione: " + this.year;
    }
    
    anniUsura(){
        var anni = 2024 - this.year;
        return anni;
        
    }
    
}
// istanze di un oggetto
var car1 = new Car("Renault", 2007);
var car2 = new Car("Opel", 2015);
var car3 = new Car("Ford", 2020);

// accedere alle propeità dell'oggetto
console.log(car2.year);
console.log(car1.name);

// chiamiamo il metodo stampa su un' instanza
console.log(car2.stampa());
console.log("La macchina ha " + car3.anniUsura() + " anni di vita");
