let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Establece el texto prueba
    document.getElementById("inputText").value = testText;

    // Reinicia resultados y temporizador
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // Cambia el texto y la funcionalidad del boton
    var button = document. getElementById("btn");
    button.innerHTML = "Finalizar Prueba";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    // Deshabilita la entrada del usuario
    document.getElementById("userInput").readonly = true;

    // Calcula el timpo transcurrido y las palabras por minuto (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // En segundos
    var userTypedText = document.getElementById("userInput").value;

    // Divide el texto usando regex para contar las palabras correctamente
    var typeWords = userTypedText.split(/\s+/).filter(function (word){
        return word !== "";
    }).length;

    var wpm = 0; // Valor predeterminado

    if (timeElapsed !== 0 && !isNaN(typeWords)) {
        wpm = Math.round((typeWords / timeElapsed) * 60);
    }

    // Muestra los resultados
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Resultados de la Prueba de Escritura: </h2>" +
    "<p>Palabras Escritas: " + typeWords + "</P>" +
    "<p>Tiempo Tanscurrido: " + timeElapsed.toFixed(2) + " segundos</p>" +
    "<p>Palabras Por Minuto (WPM):" + wpm + "</p>";

    // Reinicia el boton
    var button = document.getElementById("btn");
    button.innerHTML = "Iniciar Prueba";
    button.onclick = startTest;
}