document.addEventListener("DOMContentLoaded", function() {
    const textos_ajolote = [
        "Ajolote Rosa",
        "Ajolote Amarillo",
        "Ajolote Marrón",
        "Ajolote Celeste",
        "Ajolote Azul"
    ];
    let index = 0;

    function changeText() {
        const textElement = document.getElementById("texto-ajolote");
        
        textElement.textContent = textos_ajolote[index]; // Cambia el texto
        index = (index + 1) % textos_ajolote.length; // Vuelve al inicio al final del array
    }

    setInterval(changeText, 2000); // Cambia el texto cada 2 segundos
});
