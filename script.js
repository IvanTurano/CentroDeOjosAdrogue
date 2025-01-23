const imagenes = [
    "images/frente.jpg",
    "images/sala1.jpg",
    "images/sala2.jpg"
];

let indiceActual = 0;
const imgElement = document.getElementById("imagen-carrusel");

function cambiarImagen() {
    imgElement.classList.add("fade-out");
    setTimeout(() => {
        indiceActual = (indiceActual + 1) % imagenes.length;
        imgElement.src = imagenes[indiceActual];
        imgElement.classList.remove("fade-out");
    }, 500); // Espera antes de cambiar la imagen
}

setInterval(cambiarImagen, 3200);


const nav = document.querySelector("#nav-bar")
const abrir = document.querySelector("#menu")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click",() => {
    nav.classList.add("visible")
})


cerrar.addEventListener("click",() => {
    nav.classList.remove("visible")
})