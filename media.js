var somma = 0;
var indice = 0;
do {
    var x = prompt("scrivi una temperatura o premi e per terminare: ");
    if (x != 'e') {
    var y = parseInt(x);
    somma += y;
    indice++;
    }
}
while (x != 'e')
var media = somma/ indice;
console.log("La media delle temperature da te inserite è " + media);
