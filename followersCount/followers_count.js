let count = 0;

function increaseCount() {
    count++; // incremente el conteo en 1
    displayCount(); // Muestra el conteo
    checkCountValue(); // Verifica el valor del count y muestra mensajes
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // Muestra el conteo html
}

function checkCountValue() {
    if(count === 10){
        alert("¡Tu publicación de Instagram ganó 10 seguidores! ¡Felicidades!");
    } else if (count === 20){
        alert("¡Tu publicación de Instagram ganó 20 seguidores! ¡Sigue así!");
    }
}

function resetCount() {
    count = 0;
    alert("El conteo de seguidores ha sido reestablecido");
    displayCount();
}