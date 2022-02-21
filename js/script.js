//Guardamos en constantes los elementos del HTML pertenecientes al formulario, para poder referirnos a ellos de una forma más rápida y eficiente.
const qUno = document.getElementByClassName("pregunta1");
const qDos = document.getElementByClassName("pregunta2");
const qTres = document.getElementByClassName("pregunta3");
const qCuatro = document.getElementByClassName("pregunta4");
const qCinco = document.getElementByClassName("pregunta5");


//Creamos un array de objetos con las respuestas de las preguntas para su posterior comparación con las respuestas dadas.
const correctAnswers =[
    {antiguo: "pong"},
    {hermano: "luigi"},
    {luchadores: "doce"},
    {mandos: "cuatromandos"},
    {carreras: "topgear"}
];

//Array con las respuestas dadas:
const givenAnswers =[];

//Añadimos el evento click que pusheará la respuesta dentro del array vacío.
document.querySelector("input").addEventListener("click", function pushAnswer() {
    document.
});