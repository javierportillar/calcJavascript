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

// Eventos para recepcion del numero a operar
cero.addEventListener('click',()=>asignarNumero(0));
uno.addEventListener('click',()=>asignarNumero(1));
dos.addEventListener('click',()=>asignarNumero(2));
tres.addEventListener('click',()=>asignarNumero(3));
cuac.addEventListener('click',()=>asignarNumero(4));
cinc.addEventListener('click',()=>asignarNumero(5));
seis.addEventListener('click',()=>asignarNumero(6));
siet.addEventListener('click',()=>asignarNumero(7));
ocho.addEventListener('click',()=>asignarNumero(8));
nuev.addEventListener('click',()=>asignarNumero(9));

// Eventos para recepcion del operador.
operators.addEventListener('click',asignarOperador);

function asignarOperador(event){
  operador = event.target.textContent;
  console.log(operador);
}
function asignarNumero(num){
  numActual = num;
  console.log(numActual);
}

