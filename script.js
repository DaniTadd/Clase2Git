var listaImagenes  = ["assets/pexels-matteo-petralli-1828875.jpg", "assets/pexels-mindaugas-1294062.jpg", "assets/pexels-peng-louis-1643457.jpg", "assets/pexels-tanika-3687770.jpg"];
var currentImageIndex = 3;

var imagen = document.getElementById("imagen1");

imagen.src = listaImagenes[currentImageIndex];

let anterior = document.getElementById("anterior");
var siguiente = document.getElementById("siguiente");


anterior.addEventListener("click", 
function() {
    if (currentImageIndex == 0 ) {
        currentImageIndex = 3;
    } else {
    currentImageIndex -= 1;
    }
    imagen.src = listaImagenes[currentImageIndex];
});

siguiente.addEventListener("click", 
function() {
    if (currentImageIndex == 3 ) {
        currentImageIndex = 0;
    } else {
    currentImageIndex += 1;
    }
    imagen.src = listaImagenes[currentImageIndex];
});