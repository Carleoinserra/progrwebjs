var colori = ["rossi", "bianco", "nero", "verde"];


var bool = false;
var vite = 3;

do {
var col = prompt("indovina il colore: ");
for (var i = 0; i < colori.length; i++) {
    if (col == colori[i]) {
        bool = true;
    }
}
if (bool == true){
    console.log("colore trovato");
}
else console.log("colore non trovato");
vite-=1;
}
while (vite > 0)
if (bool == false) {
    console.log("game over");
}
