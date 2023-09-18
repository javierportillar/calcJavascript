// Obtener los elementos del HTML
const inputResult = document.getElementById("result");
const numberButtons = document.querySelectorAll(".numbers button");
const operatorButtons = document.querySelectorAll(".operators button");

let = currentOperation = "";

/// FUNCIONES ///

//Funcion para manejar el numero seleccionado en los botones
const numberSelected = (event) => {
    const number = event.target.textContent;
    currentOperation += number;
    inputResult.textContent = currentOperation;
}

//Funcion para manejar los operadores con los botones
const operatorSelected = (event) => {
    const operator = event.target.textContent;
    currentOperation += operator

}

//Funciona para hacer el calculo
const calculate = () => {
    try {
        const result = eval(currentOperation);
        inputResult.textContent = result;

    } catch(error) {
        inputResult.textContent = "Syntax Error";
    }
}

//Funcion para reiniciar la calculadora
const resetOperation = () => {
    currentOperation = "";
    inputResult.textContent = "0";
}

/// LISTENERS ///

// Event Listeners a los botones de numeros
numberButtons.forEach((button) => {
    button.addEventListener("click",numberSelected)
})

// Event Listeners a los botones de operaciones
operatorButtons.forEach((button)=> {
    button.addEventListener("click",operatorSelected)
})

// Agregar funcionaldiad de =
document.getElementById("equal").addEventListener("click", calculate)
// Agregar funcionaldiad de reiniciar
document.getElementById("reset").addEventListener("click", resetOperation)