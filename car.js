class Car {
    constructor(name, anni){
        
        this.name = name;
        this.anni = anni;
        this.stato = "da calcolare";
    }
    
    stampa(){
        return "Nome macchina:" + this.name + " anni: " + this.anni + " stato "+ this.stato;
    }
    
    calcolaAnni(){
      var age  = 2024 - this.anni;
      return age;
    }
    
    calcolaStato(){
        var age  = 2024 - this.anni;
        if (age < 3){
            this.stato = "quasi nuova";
        }
       else if (age > 3 && age < 10){
            this.stato = "buone condizioni";
        }
        else {
            this.stato = "molto usata";
        }
    }
}
var c1 = new Car("mercedes", 2020);
console.log(c1.stampa());
c1.calcolaStato();
console.log(c1.stampa());
var listaCar = [];



do {
    var name = prompt("inserisci il nome: ");
    var anni = parseInt(prompt("Inserisci gli anni"));
    var c2 = new Car(name, anni);
    listaCar.push(c2);
    var scelta = prompt("Effettua una scelta e per terminare: ");
}
while(scelta != 'e')

for (var i = 0; i < listaCar.length; i++){
    console.log(listaCar[i].stampa());
}
