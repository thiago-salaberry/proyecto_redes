const imagenes_ajolote =[
    "../imagenes/ajolote_rosa.png",
    "../imagenes/ajolote_amarillo.png",
    "../imagenes/ajolote_marron.png",
    "../imagenes/ajolote_celeste.png",
    "../imagenes/ajolote_azul.png"
];
let index = 0;

function changeImages() {
    const imageElement = document.getElementById("imagen-ajolote");
    
    imageElement.src = imagenes_ajolote[index]; // Cambia la fuente de la imagen
    index = (index + 1) % imagenes_ajolote.length; // Vuelve al inicio al final del array
}

setInterval(changeImages, 2000); // Cambia las imágenes cada 2 segundos