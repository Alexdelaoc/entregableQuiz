//Creamos un array de objetos con las respuestas de las preguntas para su posterior comparación con las respuestas dadas.
const cheatSheet = ["pong", "luigi", "doce", "cuatromandos", "topgear"];
let givenAnswers = [];

//Añadimos el eventListener con su consiguiente función, que dictará el comportamiento del formulario.
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); //Pausa el envío del formulario (Doctor Strange)

    //Creamos un array en el que introducir las respuestas dadas
    givenAnswers = [];
    //Definimos las variables y pusheamos los valores de los inputs en el array vacío
    var checkRadio = document.querySelector('input[name="antiguo"]:checked');
        
    if (checkRadio != null) {
        givenAnswers.push(checkRadio.value);
    } else console.log("No one selected");


    var checkRadio = document.querySelector('input[name="hermano"]:checked');

    if (checkRadio != null) {
        givenAnswers.push(checkRadio.value);
    } else console.log("No one selected");


    var checkRadio = document.querySelector('input[name="luchadores"]:checked');

    if (checkRadio != null) {
        givenAnswers.push(checkRadio.value);
    } else console.log("No one selected");


    var checkRadio = document.querySelector('input[name="mandos"]:checked');

    if (checkRadio != null) {
        givenAnswers.push(checkRadio.value);
    } else console.log("No one selected");


    var checkRadio = document.querySelector('input[name="carreras"]:checked');

    if (checkRadio != null) {
        givenAnswers.push(checkRadio.value);
    } else console.log("No one selected");

    //Comparamos los arrays givenAnswers y cheatSheet.
    
    for (let i = 0; i < cheatSheet.length; i++) {
    
        if (givenAnswers[i] == cheatSheet[i]) {
        // funciona porque la cantidad de divs con clase correct es la misma que elementos hay en los array givenAnswers y cheatSheet.
        document.querySelectorAll('.correct')[i].style.backgroundColor = 'green';
        }  
    }
    
    let inputs = document.querySelectorAll("input");
    let incorrectos = [];

    for (let j = 0; j < inputs.length; j++){
        if (inputs[j].value == "incorrect"){
            incorrectos.push(inputs[j]);
        }
    }

    for (let k = 0; k < incorrectos.length; k++) {
        // funciona porque la cantidad de divs con clase incorrect es la misma que inputs con value incorrect se han pusheado en el array incorrecto
        if (incorrectos[k].checked){
            document.querySelectorAll(".incorrect")[k].style.backgroundColor = 'red';
        }
    }
});