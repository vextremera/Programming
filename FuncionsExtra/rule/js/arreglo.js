// === Variables y Constantes ===
const fichas = ["chip-1", "chip-5", "chip-10", "chip-20", "chip-25", "chip-50", "chip-100", "chip-150", "chip-200"];
let fichaSeleccionada = 0;
let balance = 1000;
let bets = [], even = [], odd = [], red = [], black = [];
const apuestas = {};

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

const numberBets = document.querySelectorAll('.numbers');
const lineBets = document.querySelectorAll('.bet-2-to-1');
const thirdBets = document.querySelectorAll('.docena-bet');
const redButton = document.getElementById('red-button');
const blackButton = document.getElementById('black-button');
const chipsMenu = document.getElementById('chipsMenuDiv');
const chipsButton = document.querySelector('#chips-button');

// === Funciones ===

function closeChipsMenu() {
    if (chipsMenu.classList.contains('active')) {
        chipsMenu.classList.remove('active');
        chipsMenu.classList.add('hidden');
        setTimeout(() => {
            chipsMenu.style.display = 'none';
            chipsMenu.classList.remove('hidden');
        }, 300);
    }
}

function agregarApuesta(casilla, valorFicha) {
    const totalApuesta = Object.values(apuestas).reduce((sum, valor) => sum + valor, 0);
    if (totalApuesta + valorFicha > balance) {
        console.warn("No tienes suficiente balance para esta apuesta.");
        return;
    }
    apuestas[casilla] = (apuestas[casilla] || 0) + valorFicha;
    console.log(`Apuesta en ${casilla}: ${apuestas[casilla]}`);
}

function colocarFicha(casilla, valorFicha) {
    let divApuesta = document.getElementById(casilla) || 
        Array.from(document.querySelectorAll('.numbers')).find(div => div.textContent.trim() === casilla);
    if (!divApuesta) return console.warn(`No se encontró el div para la casilla: ${casilla}`);

    const fichaExistente = divApuesta.querySelector('.ficha-apuesta');
    if (fichaExistente) fichaExistente.remove();

    const imgFicha = document.createElement('img');
    imgFicha.src = `img/chip-${valorFicha}.png`;
    imgFicha.classList.add('ficha-apuesta');
    imgFicha.style = `position:absolute;width:100px;height:100px;z-index:40;pointer-events:none`;
    divApuesta.style.position = 'relative';
    divApuesta.appendChild(imgFicha);
}

// === Eventos ===

// Menú de fichas
chipsButton.addEventListener('click', () => {
    if (chipsMenu.classList.contains('active')) {
        closeChipsMenu();
    } else {
        chipsMenu.style.display = 'grid';
        requestAnimationFrame(() => chipsMenu.classList.add('active'));
    }
});

document.addEventListener('click', event => {
    if (!chipsMenu.contains(event.target) && !chipsButton.contains(event.target)) closeChipsMenu();
});

fichas.forEach(valor => {
    const ficha = document.getElementById(valor);
    if (ficha) ficha.addEventListener('click', () => {
        fichaSeleccionada = parseInt(valor.split('-')[1], 10);
        console.log(`Has seleccionado la ficha de valor: ${fichaSeleccionada}`);
        closeChipsMenu();
    });
});

// Apuestas individuales
numberBets.forEach(numberBet => {
    numberBet.addEventListener('click', () => {
        const casilla = numberBet.textContent.trim();
        if (fichaSeleccionada) {
            agregarApuesta(casilla, fichaSeleccionada);
            colocarFicha(casilla, fichaSeleccionada);
        } else {
            console.warn("No se ha seleccionado una ficha.");
        }
    });
});

// Apuestas por líneas
lineBets.forEach(lineBet => {
    lineBet.addEventListener('click', () => {
        const lineNumbers = lines[lineBet.id];
        if (lineNumbers && fichaSeleccionada) {
            agregarApuesta(lineBet.id, fichaSeleccionada);
            colocarFicha(lineBet.id, fichaSeleccionada);
        }
    });
});

// Apuestas por tercios
thirdBets.forEach(thirdBet => {
    thirdBet.addEventListener('click', () => {
        const thirdNumbers = thirds[thirdBet.id];
        if (thirdNumbers && fichaSeleccionada) {
            agregarApuesta(thirdBet.id, fichaSeleccionada);
            colocarFicha(thirdBet.id, fichaSeleccionada);
        }
    });
});

// Botones rojo y negro
redButton.addEventListener('click', () => {
    if (fichaSeleccionada) {
        agregarApuesta('red', fichaSeleccionada);
        colocarFicha('red', fichaSeleccionada);
    } else {
        console.warn("No se ha seleccionado una ficha.");
    }
});

blackButton.addEventListener('click', () => {
    if (fichaSeleccionada) {
        agregarApuesta('black', fichaSeleccionada);
        colocarFicha('black', fichaSeleccionada);
    } else {
        console.warn("No se ha seleccionado una ficha.");
    }
});

// Pares e impares
document.getElementById('odd').addEventListener('click', () => {
    if (fichaSeleccionada) {
        agregarApuesta('odd', fichaSeleccionada);
        colocarFicha('odd', fichaSeleccionada);
    } else {
        console.warn("No se ha seleccionado una ficha.");
    }
});

document.getElementById('even').addEventListener('click', () => {
    if (fichaSeleccionada) {
        agregarApuesta('even', fichaSeleccionada);
        colocarFicha('even', fichaSeleccionada);
    } else {
        console.warn("No se ha seleccionado una ficha.");
    }
});

document.getElementById('half-1').addEventListener('click', function () {
    if (fichaSeleccionada) {
        agregarApuesta('half-1', fichaSeleccionada);
        colocarFicha('half-1', fichaSeleccionada); // Coloca la ficha
    } else {
        console.warn("No se ha seleccionado una ficha.");
    }
});

document.getElementById('half-2').addEventListener('click', function () {
    if (fichaSeleccionada) {
        agregarApuesta('half-2', fichaSeleccionada);
        colocarFicha('half-2', fichaSeleccionada); // Coloca la ficha
    } else {
        console.warn("No se ha seleccionado una ficha.");
    }
});
