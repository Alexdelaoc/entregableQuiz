//Creamos un array de objetos con las respuestas de las preguntas para su posterior comparación con las respuestas dadas.
const cheatSheet = ["pong", "luigi", "doce", "cuatromandos", "topgear"];


document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); //Pausa el envío del formulario (Doctor Strange)

//Creamos un array en el que introducir las respuestas dadas
    const givenAnswers = [];

//Definimos las variables que indiquen la longitud del array de la pregunta para, posteriormente, iterarlos en un bucle.
    const question1Length = document.getElementByClassName("pregunta1").length;
    const question2Length = document.getElementByClassName("pregunta2").length;
    const question3Length = document.getElementByClassName("pregunta3").length;
    const question4Length = document.getElementByClassName("pregunta4").length;

//Creamos bucles for que iteren cada fieldset del formulario, uno por pregunta. *****HAY QUE REFACTORIZAR ESTO*****
    for (let i = 0; i < question1Length; i++) {
        if (document.getElementByTagName("input")[i].checked) {
            givenAnswers.push("pacman");
        } else if (document.getElementByTagName("input")[i + 1].checked){
            givenAnswers.push("tetris");
        } else if (document.getElementByTagName("input")[i + 2].checked){
            givenAnswers.push("pong");
        } else if (document.getElementByTagName("input")[i + 3].checked){
            givenAnswers.push("mario");
        }
    }

    for (let i = 0; i < question2Length; i++) {
        if (document.getElementByTagName("input")[i].checked) {
            givenAnswers.push("luigi");
        } else if (document.getElementByTagName("input")[i + 1].checked){
            givenAnswers.push("mariojr");
        } else if (document.getElementByTagName("input")[i + 2].checked){
            givenAnswers.push("honguito");
        } else if (document.getElementByTagName("input")[i + 3].checked){
            givenAnswers.push("marioverde");
        }
    }

    for (let i = 0; i < question3Length; i++) {
        if (document.getElementByTagName("input")[i].checked) {
            givenAnswers.push("doce");
        } else if (document.getElementByTagName("input")[i + 1].checked){
            givenAnswers.push("ocho");
        } else if (document.getElementByTagName("input")[i + 2].checked){
            givenAnswers.push("cuatro");
        } else if (document.getElementByTagName("input")[i + 3].checked){
            givenAnswers.push("dieciseis");
        }
    }

    for (let i = 0; i < question4Length; i++) {
        if (document.getElementByTagName("input")[i].checked) {
            givenAnswers.push("dosmandos");
        } else if (document.getElementByTagName("input")[i + 1].checked){
            givenAnswers.push("unomandos");
        } else if (document.getElementByTagName("input")[i + 2].checked){
            givenAnswers.push("cuatromandos");
        } else if (document.getElementByTagName("input")[i + 3].checked){
            givenAnswers.push("seismandos");
        }
    }

    for (let i = 0; i < question5Length; i++) {
        if (document.getElementByTagName("input")[i].checked) {
            givenAnswers.push("rtype");
        } else if (document.getElementByTagName("input")[i + 1].checked){
            givenAnswers.push("snake");
        } else if (document.getElementByTagName("input")[i + 2].checked){
            givenAnswers.push("frogger");
        } else if (document.getElementByTagName("input")[i + 3].checked){
            givenAnswers.push("topgear");
        }
    }

//Comparamos con un ternario el array cheatSheet con el array givenAnswers. De momento sólo colocaremos un console.log para comprobar si el código funciona.

    for (let j = 0; j < givenAnswers.length; j++) {
        cheatSheet[j] == givenAnswers ? console.log("respuesta " + (j + 1) + "correcta.") : console.log("respuesta " + (j + 1) + "incorrecta.") ;
    }



})