// creiamo un array

var lista = new Array();
var lista1 = new Array(4);
var lista2 = ["rossi", "bianchi", "neri"];

// accedere agli elementi di un array
//console.log(lista2[2]);
// cambiare un elemento all'interno dell'array
lista2[2] = "gialli";
// console.log(lista2[2]);
// metodi degli array
console.log(lista2.length);
lista2.push("neri");
// accesso agli elmenti tramite ciclo for
for (var i = 0; i < lista2.length; i++) {
    //console.log(lista2[i]);
}
// for sintetico
lista2.pop();
for (el in lista2){
    console.log(lista2[el]);
}
