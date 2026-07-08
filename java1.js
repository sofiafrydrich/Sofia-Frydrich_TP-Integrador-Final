const abrirDato = document.getElementById("abrirDato");
const cerrarDato = document.getElementById("cerrarDato");
const modalDato = document.getElementById("modalDato");
const otroDato = document.getElementById("otroDato");
const textoDato = document.getElementById("textoDato");
const imagenDato = document.getElementById("imagenDato");

const datosCuriosos = [

  {
    texto: "En Saturno puede llover hielo en lugar de agua.",      
    imagen: "Imagenes/1dato.jpg"
  },
 
  {
    texto: "En Venus, un solo día dura más que un año.",
    imagen: "Imagenes/2dato.jpg"
  },
  
  {
    texto: "+1.300 Tierras cabrían dentro de Júpiter.",
    imagen: "imagenes/3dato.jpg"
  },
  
  {
    texto: "La Luna se aleja de la Tierra 3,8 cm por año.",
    imagen: "imagenes/4dato.jpg"
  },

];

let datoActual = 0;

abrirDato.addEventListener("click", () => {  
  modalDato.classList.add("activo");
});

cerrarDato.addEventListener("click", () => {
  modalDato.classList.remove("activo");
});

otroDato.addEventListener("click", () => {
    
  datoActual++;
    
  if(datoActual >= datosCuriosos.length){
    datoActual = 0;
  }  
  
  textoDato.textContent = datosCuriosos[datoActual].texto;
  imagenDato.src = datosCuriosos[datoActual].imagen;

});

