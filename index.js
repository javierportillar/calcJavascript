// Asignación de elementos HTML a variables JS //
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const cero = document.querySelector("#cero");
const uno = document.querySelector("#uno");
const dos = document.querySelector("#dos");
const tres = document.querySelector("#tres");
const cuac = document.querySelector("#cuac");
const cinc = document.querySelector("#cinc");
const seis = document.querySelector("#seis");
const siet = document.querySelector("#siet");
const ocho = document.querySelector("#ocho");
const nuev = document.querySelector("#nuev");
const eliminarDatos = document.querySelector(".eliminarDatos");
const igualButton = document.querySelector(".equal");
const btnDatos = document.querySelector(".btnDatos");
const datosShow = document.getElementById("datosShow");
const datosData = document.getElementById("datosData");
let resultado = document.querySelector("#text-content");
let verOpera = document.getElementById("operation-content");

// Declaración de variables de control //
let numAnterior = "";
let numActual = "";
let operador = "";
let resultadoOp = "";
// Declaración de una indicador de seleccion de un operador
let operadorSeleccionado = false;
// Declaración de vector almacenador de operaciones
let operaHisto = [];
// Numero de operaciones hechas
let i = 1;

// Eventos para recepcion del numero a operar
cero.addEventListener("click", () => asignarNumero(0));
uno.addEventListener("click", () => asignarNumero(1));
dos.addEventListener("click", () => asignarNumero(2));
tres.addEventListener("click", () => asignarNumero(3));
cuac.addEventListener("click", () => asignarNumero(4));
cinc.addEventListener("click", () => asignarNumero(5));
seis.addEventListener("click", () => asignarNumero(6));
siet.addEventListener("click", () => asignarNumero(7));
ocho.addEventListener("click", () => asignarNumero(8));
nuev.addEventListener("click", () => asignarNumero(9));

// Eventos para recepcion del operador.
operators.addEventListener("click", asignarOperador);

// Eventos para acciones
igualButton.addEventListener("click", () => realizarOp());
btnDatos.addEventListener("click", () => mostrarCalculos());
eliminarDatos.addEventListener("click", () => cleanScreen());

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
      case "-":
        resultadoOp = parseFloat(numAnterior) - parseFloat(numActual);
        break;
    }
    console.log(numAnterior, numActual);
    actScreen2();
    numActual = resultadoOp;
    actScreen();
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
  actScreen();
  console.log(numActual);
}
function actScreen() {
  resultado.textContent = numActual;
}
function actScreen2() {
  // Crear una cadena que represente la operación actual
  const operacionActual = `${numAnterior} ${operador} ${numActual} = ${resultadoOp}`;

  // Agregar la operación al historial
  operaHisto.push(`Operación n.${i} ${operacionActual}`);
  i++;

  // Actualizar datosData y verOpera
  datosData.textContent = operaHisto; // Historial de calculos
  verOpera.textContent = operacionActual;
}
function mostrarCalculos() {
  datosShow.classList.toggle("active");
  datosShow.classList.toggle("inactive");
}

function cleanScreen() {
  numAnterior = "";
  numActual = "";
  operador = "";
  resultadoOp = "";
  operadorSeleccionado = false;
  resultado.textContent = "";
  verOpera.textContent = "";


}
