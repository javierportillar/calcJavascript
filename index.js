// Asignación de elementos HTML a variables JS //
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
// const [cero, uno, dos, tres, cuac, cinc, seis, siet, ocho, nuev] = [0,1,2,3,4,5,6,7,8,9].map((numero) => document.querySelector(`#num_${numero}`))

// const cero = document.querySelector("#cero");
// const uno = document.querySelector("#uno");
// const dos = document.querySelector("#dos");
// const tres = document.querySelector("#tres");
// const cuac = document.querySelector("#cuac");
// const cinc = document.querySelector("#cinc");
// const seis = document.querySelector("#seis");
// const siet = document.querySelector("#siet");
// const ocho = document.querySelector("#ocho");
// const nuev = document.querySelector("#nuev");
const eliminarDatos = document.querySelector(".eliminarDatos");
const igualButton = document.querySelector(".equal");
const btnDatos = document.querySelector(".btnDatos");
const datosShow = document.getElementById("datosShow");
const datosData = document.getElementById("datosData");
const resultado = document.querySelector("#text-content");
const verOpera = document.getElementById("operation-content");
const clearScreenBtn = document.querySelector(".clearScreen");

// Declaración de variables de control //
let numAnterior = "";
let numActual = "";
let operador = "";
let resultadoOp = "";
// Declaración de una indicador de seleccion de un operador
let operadorSeleccionado = false;
// Declaración de vector almacenador de operaciones
let operaHisto = [];
let operaRealizada = false;
// Numero de operaciones hechas
let i = 1;

document
  .querySelectorAll("#contenedor_numeros > button")
  .forEach((boton) =>
    boton.addEventListener("click", () =>
      asignarNumero(parseInt(boton.textContent))
    )
  );

// Eventos para recepcion del numero a operar
// [cero, uno, dos, tres,cuac,
//   cinc,
//   seis,
//   siet,
//   ocho,
//   nuev].forEach((numero, index) => numero.addEventListener("click", () => asignarNumero(index)))

// const listeners = [cero, uno, dos, tres,cuac,
//   cinc,
//   seis,
//   siet,
//   ocho,
//   nuev].map((numero, index) => {
//     const lis = () => asignarNumero(index);
//     numero.addEventListener("click", lis)
//     return {numero,lis};
//   })
// listeners.forEach(({numero, lis}) => numero.removeEventListener(list))

// cero.addEventListener("click", () => asignarNumero(0));
// uno.addEventListener("click", () => asignarNumero(1));
// dos.addEventListener("click", () => asignarNumero(2));
// tres.addEventListener("click", () => asignarNumero(3));
// cuac.addEventListener("click", () => asignarNumero(4));
// cinc.addEventListener("click", () => asignarNumero(5));
// seis.addEventListener("click", () => asignarNumero(6));
// siet.addEventListener("click", () => asignarNumero(7));
// ocho.addEventListener("click", () => asignarNumero(8));
// nuev.addEventListener("click", () => asignarNumero(9));

// Eventos para recepcion del operador.
operators.addEventListener("click", asignarOperador);

// Eventos para acciones
igualButton.addEventListener("click", realizarOp);
btnDatos.addEventListener("click", mostrarCalculos);
eliminarDatos.addEventListener("click", cleanCalculator);
clearScreenBtn.addEventListener("click", clearScreen);

//Funciones de control
function realizarOp() {
  if (numAnterior !== "" && numActual !== "") {
    switch (operador) {
      case "+":
        resultadoOp = parseFloat(numActual) + parseFloat(numAnterior);
        break;
      case "-":
        resultadoOp = parseFloat(numAnterior) - parseFloat(numActual);
        break;
      case "x":
        resultadoOp = parseFloat(numAnterior) * parseFloat(numActual);
        break;
      case "/":
        resultadoOp = parseFloat(numAnterior) / parseFloat(numActual);
        break;
    }
    operaRealizada = true;
    console.log(numAnterior, numActual);
    actScreenTemporal();
    numActual = resultadoOp;
    actScreen(numActual);
    console.log(resultadoOp);
  }
}

function asignarOperador(event) {
  // Verificar si ya se seleccionó un operador
  if (operadorSeleccionado) {
    resultado.textContent = "ELIGE UN NUMERO, NO OPERACION";
    return;
  }
  // Verificar si el número actual no está vacío
  if (numActual !== "") {
    operador = event.target.textContent;
    numAnterior = numActual;
    numActual = "";
    operadorSeleccionado = true;
    console.log(operador);
  }
}

function asignarNumero(num) {
  // Restablecer el estado del operador si se presiona un número
  operadorSeleccionado = false;
  // Concatenar el número al número actual como una cadena
  numActual = numActual.toString() + num.toString();
  // Actualizar la visualización en la pantalla
  actScreen(numActual);
  console.log(numActual);
}

function actScreen(nuevoNumero) {
  resultado.textContent = nuevoNumero;
}

function actualizarArray(operacionActual) {
  operaHisto.push(`N.${operaHisto.length} ${operacionActual}`);
}

function actScreenTemporal() {
  // Crear una cadena que represente la operación actual
  const operacionActual = `${numAnterior} ${operador} ${numActual} = ${resultadoOp}`;

  // Agregar la operación al historial
  actualizarArray(operacionActual);

  const li = document.createElement("li");
  li.textContent = `N.${operaHisto.length} ->${operacionActual}`;
  datosData.appendChild(li);

  // Actualizar datosData y verOpera
  verOpera.textContent = operacionActual;
}

function mostrarCalculos() {
  datosShow.classList.toggle("active");
  datosShow.classList.toggle("inactive");
}

function cleanCalculator() {
  numAnterior = "";
  numActual = "";
  operador = "";
  resultadoOp = "";
  operadorSeleccionado = false;
  resultado.textContent = "";
  verOpera.textContent = "";
  operaHisto = ""
  datosData.innerHTML=""
}

function clearScreen() {
  resultado.textContent = "";
  numActual = "";
}
// Poner una lista en html para indicar las op
