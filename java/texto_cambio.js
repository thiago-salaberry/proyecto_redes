document.addEventListener("DOMContentLoaded", function() {
    const textos_ajolote = [
        "Ajolote Rosa",
        "Ajolote Amarillo",
        "Ajolote Marrón",
        "Ajolote Celeste",
        "Ajolote Azul"
    ];
    const textos_aldeano = [ // Nuevo array para los textos de la segunda imagen
        "Aldeano Adulto",
        "Aldeano Bebe"
    ];
    let indexAjolote = 0; // Índice para ajolote
    let indexAldeano = 0; // Índice para aldeano

    function changeText() {
        const textElement1 = document.getElementById("texto-ajolote");
        const textElement2 = document.getElementById("texto-aldeano"); // Nueva imagen
        
        textElement1.textContent = textos_ajolote[indexAjolote]; // Cambia el texto de la imagen 1
        textElement2.textContent = textos_aldeano[indexAldeano]; // Cambia el texto de la imagen 2
        
        indexAjolote = (indexAjolote + 1) % textos_ajolote.length; // Vuelve al inicio al final del array de ajolote
        indexAldeano = (indexAldeano + 1) % textos_aldeano.length; // Vuelve al inicio al final del array de aldeano
    }

    setInterval(changeText, 2000); // Cambia el texto cada 2 segundos
});
