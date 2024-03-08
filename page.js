window.onload = gestoreLoad;

function gestoreLoad(){

    var nodo = document.getElementById("container");
    calcola(nodo); 
}

function calcola(nodo){
    
    var btn = document.createElement("button");
    var par = document.createElement("p");
    var textpar = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquam voluptates cupiditate veniam, voluptas necessitatibus fuga, iure praesentium non doloremque ad incidunt voluptatibus assumenda nobis rerum quaerat adipisci obcaecati. Libero.");
    par.appendChild(textpar);
    nodo.appendChild(par);
    var img = document.createElement("img");
    img.src = "mimosa.jpeg";
    nodo.appendChild(img);
    
    var textnode = document.createTextNode("Invia");
    btn.appendChild(textnode);
    nodo.appendChild(btn);
    btn.onclick = stampa;
    
    

}

function stampa(){
    alert("ciao mondo!");
}