// Array con los fichas específicos
const fichas = ["chip-1", "chip-5", "chip-10", "chip-20", "chip-25", "chip-50", "chip-100", "chip-150", "chip-200"];
let fichaSeleccionada = 0;
let balance = 1000; // Balance inicial

// Arrays para almacenar apuestas
let bets = []; // Para apuestas individuales
let even = []; // Números pares
let odd = []; // Números impares
let red = []; // Números rojos
let black = []; // Números negros

// Mapeos de líneas y tercios
const lines = {
    'lineBet-1': ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36'],
    'lineBet-2': ['2', '5', '8', '11', '14', '17', '20', '23', '26', '29', '32', '35'],
    'lineBet-3': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34']
};
const thirds = {
    'thirdBet-1': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    'thirdBet-2': ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
    'thirdBet-3': ['25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36']
};

// Selección de elementos del DOM
const numberBets = document.querySelectorAll('.numbers');
const lineBets = document.querySelectorAll('.bet-2-to-1');
const thirdBets = document.querySelectorAll('.docena-bet');

// Objeto para almacenar las apuestas
const apuestas = {};

const mostrarChipsBtn = document.getElementById('chips-button');
const chipsMenu = document.getElementById('chipsMenuDiv');

ocultarMenu(chipsMenu);


mostrarChipsBtn.addEventListener('click', function () {
    if (chipsMenu.style.display == "grid") {
        ocultarMenu(chipsMenu);
    }
    else if (chipsMenu.style.display == "none") {
        mostrarMenu(chipsMenu);
        // console.log('Se ha llamado la funcion para mostrar el menu');
    }
});

// Función para mostrar/ocultar menús
function mostrarMenu(menu) {
    menu.style.display = "grid";
}

function ocultarMenu(menu) {
    menu.style.display = "none";
}

// Función para agregar o actualizar apuestas
function agregarApuesta(casilla, valorFicha) {
    const totalApuesta = Object.values(apuestas).reduce((sum, valor) => sum + valor, 0);
    if (totalApuesta + valorFicha > balance) {
        console.warn("No tienes suficiente balance para esta apuesta.");
        return;
    }

    if (apuestas[casilla]) {
        apuestas[casilla] += valorFicha;
    } else {
        apuestas[casilla] = valorFicha;
    }
    console.log(`Apuesta en ${casilla}: ${apuestas[casilla]}`);
}

// Función para calcular premios
function calcularPremio(resultado) {
    let totalPremio = 0;

    Object.keys(apuestas).forEach(casilla => {
        const apuesta = apuestas[casilla];
        if (casilla === resultado) {
            totalPremio += apuesta * 36; // Pago x36 para números exactos
        } else if (lines[`lineBet-${casilla}`]?.includes(resultado)) {
            totalPremio += apuesta * 3; // Pago x3 para líneas
        } else if (thirds[`thirdBet-${casilla}`]?.includes(resultado)) {
            totalPremio += apuesta * 3; // Pago x3 para tercios
        } else if (resultado % 2 === 0 && casilla === 'even') {
            totalPremio += apuesta * 2; // Pago x2 para pares
        } else if (resultado % 2 !== 0 && casilla === 'odd') {
            totalPremio += apuesta * 2; // Pago x2 para impares
        } else if (red.includes(resultado) && casilla === 'red') {
            totalPremio += apuesta * 2; // Pago x2 para rojos
        } else if (black.includes(resultado) && casilla === 'black') {
            totalPremio += apuesta * 2; // Pago x2 para negros
        }
    });

    console.log(`Total premio: ${totalPremio}`);
    return totalPremio;
}

// Función para calcular pérdida total
function calcularPerdidaTotal() {
    let totalPerdida = Object.values(apuestas).reduce((sum, valor) => sum + valor, 0);
    console.log(`Total pérdida: ${totalPerdida}`);
    return totalPerdida;
}

// Asignar eventos a cada ficha
fichas.forEach(valor => {
    const ficha = document.getElementById(valor);
    if (ficha) {
        ficha.addEventListener('click', function () {
            const valorFicha = parseInt(valor.split('-')[1], 10);
            if (valorFicha > balance) {
                console.warn("No tienes suficiente balance para seleccionar esta ficha.");
                fichaSeleccionada = 0;
                return;
            }
            fichaSeleccionada = valorFicha;
            ocultarMenu(chipsMenu); //ocultamos el menu
            console.log("se ha ejecutado la funcion para ocultar el menu");
            console.log(`Has seleccionado la ficha de valor: ${fichaSeleccionada}`);
        });
    }
});

// Asignar eventos a los números individuales
numberBets.forEach(numberBet => {
    numberBet.addEventListener('click', function () {
        const casilla = numberBet.textContent.trim();
        if (fichaSeleccionada) {
            agregarApuesta(casilla, fichaSeleccionada);
        } else {
            console.warn("No se ha seleccionado una ficha.");
        }
    });
});

// Asignar eventos a las líneas
lineBets.forEach(lineBet => {
    lineBet.addEventListener('click', function () {
        const whichLine = lineBet.id;
        const lineNumbers = lines[whichLine];
        if (lineNumbers && fichaSeleccionada) {
            lineNumbers.forEach(() => {
                agregarApuesta(`lineBet-${whichLine}`, fichaSeleccionada);
            });
        }
    });
});

// Asignar eventos a los tercios
thirdBets.forEach(thirdBet => {
    thirdBet.addEventListener('click', function () {
        const whichThird = thirdBet.id;
        const thirdNumbers = thirds[whichThird];
        if (thirdNumbers && fichaSeleccionada) {
            thirdNumbers.forEach(() => {
                agregarApuesta(`thirdBet-${whichThird}`, fichaSeleccionada);
            });
        }
    });
});

// Evento para calcular el resultado
document.querySelector('#calcular').addEventListener('click', function () {
    const resultado = prompt("Introduce el número ganador (1-36): ");
    if (!resultado || isNaN(resultado) || resultado < 1 || resultado > 36) {
        console.error("Número inválido.");
        return;
    }

    const premio = calcularPremio(resultado);
    const perdida = calcularPerdidaTotal();
    const balanceFinal = balance + premio - perdida;

    if (balanceFinal < 0) {
        console.warn("No puedes perder más de tu balance actual.");
        return;
    }

    balance = balanceFinal;

    console.log(`Premio total: ${premio}`);
    console.log(`Pérdida total: ${perdida}`);
    console.log(`Balance final: ${balance}`);
});