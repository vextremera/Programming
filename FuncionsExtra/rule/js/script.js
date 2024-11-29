// - ============== Variables y Constantes ===================

const fichas = ["chip-1", "chip-5", "chip-10", "chip-20", "chip-25", "chip-50", "chip-100", "chip-150", "chip-200"];
let fichaSeleccionada = 0;

const balanceElement = document.getElementById("balanceNumber");
let balance = 0;

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

// - =========================================================

// - ======================== FUNCIONES ===========================

// * FUNCION CERRAR MENU DE FICHAS
function closeChipsMenu() {
    // $ console.info("Close menu Function")
    if (chipsMenu.classList.contains('active')) {
        chipsMenu.classList.remove('active');
        chipsMenu.classList.add('hidden');

        // ? Espera que la animación termine antes de ocultarlo
        setTimeout(() => {
            chipsMenu.style.display = 'none';
            chipsMenu.classList.remove('hidden');
        }, 300); // ? Duración de la animación de salida
    }
}

// * FUNCION PARA DIBUJAR FICHA ENCIMA
function colocarFicha(casilla, valorFicha) {
    let divApuesta;
    
    // ? Selección según casilla específica
    if (casilla === 'red' || casilla === 'black') {
        divApuesta = document.getElementById(`${casilla}-button`);
    } else if (casilla === 'even' || casilla === 'odd') {
        divApuesta = document.getElementById(casilla);
    } else if (casilla === 'half-1' || casilla === 'half-2') {
        divApuesta = document.getElementById(casilla);
    } else if (casilla.startsWith('thirdBet-') || casilla.startsWith('lineBet-')) {
        divApuesta = document.getElementById(casilla); 
    } else {
        divApuesta = Array.from(document.querySelectorAll('.numbers'))
            .find(div => div.textContent.trim() === casilla);
    }

    if (!divApuesta) {
        console.warn(`No se encontró el div para la casilla: ${casilla}`);
        return;
    }

    // ? Eliminar cualquier ficha existente en esa casilla
    const fichaExistente = divApuesta.querySelector('.ficha-apuesta');
    if (fichaExistente) fichaExistente.remove();

    // ? Crear y posicionar la imagen de la ficha
    const imgFicha = document.createElement('img');
    imgFicha.src = `img/chip-${valorFicha}.png`;
    imgFicha.alt = `chip-${valorFicha}`;
    imgFicha.classList.add('ficha-apuesta');

    // ? Estilos para la imagen
    imgFicha.style.position = 'absolute';
    imgFicha.style.width = '100px';  // + Ajusta el tamaño según necesidad
    imgFicha.style.height = '100px';
    imgFicha.style.zIndex = '40';
    imgFicha.style.pointerEvents = 'none';

    // ? Asegurarse de que el contenedor tiene `position: relative`
    divApuesta.style.position = 'relative';
    divApuesta.appendChild(imgFicha);
}

// * FUNCION PARA AGREGAR APUESTAS A LAS CASILLAS CONCRETAS
function agregarApuesta(casilla, valorFicha) {
    const totalApuesta = Object.values(apuestas).reduce((sum, valor) => sum + valor, 0);
    if (totalApuesta + valorFicha > balance) {
        console.warn("No tienes suficiente balance para esta apuesta.");
        return;
    }

    // ? Resta el valor de la ficha del balance
    balance -= valorFicha;
    actualizarBalance();

    if (apuestas[casilla]) {
        apuestas[casilla] += valorFicha;
    } else {
        apuestas[casilla] = valorFicha;
    }
    console.log(`Apuesta en ${casilla}: ${apuestas[casilla]}`);
}

// * CALCULO DE BENEFICIO
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
    actualizarBalance(); // Actualiza el DOM con el nuevo balance

    console.log(`Premio total: ${premio}`);
    console.log(`Pérdida total: ${perdida}`);
    console.log(`Balance final: ${balance}`);
});

// * CALCULO DE PERDIDA TOTAL DE BALANCE
function calcularPerdidaTotal() {
    let totalPerdida = Object.values(apuestas).reduce((sum, valor) => sum + valor, 0);
    console.log(`Total pérdida: ${totalPerdida}`);
    return totalPerdida;
}

// * FUNCION DE ACTUALIZAR EL BALANCE
function actualizarBalance() {
    balanceElement.textContent = `${balance}`;
}

// - ==========================================================================

// - ============================ EVENTOS Y BOTONES ===========================

// * FUNCION PARA CERRAR MENU AL PULSAR EN CUALQUIER LUGAR FUERA DEL MENU
document.addEventListener('click', (event) => {
    // ? Cierra el menú si haces clic fuera de él o el botón de chips
    if (!chipsMenu.contains(event.target) && !chipsButton.contains(event.target)) {
        closeChipsMenu();
    }
});

// & FUNCION DE EVENTO PARA CALCULAR TODO EN CLIC DE BOTON
// !!! CALCULAR
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

// * FUNCION PARA QUITAR APUESTAS A LAS CASILLAS CONCRETAS
document.getElementById('wrong').addEventListener('click', function () {
    const fichasApuestas = document.querySelectorAll('.ficha-apuesta');

    fichasApuestas.forEach(ficha => {
        const casilla = ficha.closest('.numbers, .special-bet, .bet');

        if (casilla && apuestas[casilla.id]) {
            // + Sumar el valor de la apuesta al balance
            balance += apuestas[casilla.id];
            delete apuestas[casilla.id]; // ? Eliminar la apuesta de la lista
            ficha.remove(); // ? Eliminar la ficha del DOM
        }
    });

    // + Restablecer la ficha seleccionada
    fichaSeleccionada = null; // ? Asegúrate de que la ficha seleccionada se elimine

    actualizarBalance(); // ? Actualiza el balance después de quitar la apuesta
});

// & BOTON DEL MENU
chipsButton.addEventListener('click', () => {
    if (chipsMenu.classList.contains('active')) {
        closeChipsMenu(); // Cerrar si ya está activo
    } else {
        chipsMenu.style.display = 'grid';
        requestAnimationFrame(() => {
            chipsMenu.classList.add('active');
        });
    }
});

// !!! EVENTO DE FICHAS
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
            console.log(`Has seleccionado la ficha de valor: ${fichaSeleccionada}`);
            closeChipsMenu();
        });
    }
});

// & ================ EVENTOS DE NUMERO UNICOS ==================0
// * EVENTO DE NUMEROS
numberBets.forEach(numberBet => {
    numberBet.addEventListener('click', function () {
        const casilla = numberBet.textContent.trim();
        if (fichaSeleccionada) {
            agregarApuesta(casilla, fichaSeleccionada);
            colocarFicha(casilla, fichaSeleccionada); // ! COLOCAR FICHA ENCIMA
        } else {
            console.warn("No se ha seleccionado una ficha.");
        }
    });
});

// & ============= EVENTOS DE 1/3 =================
// * EVENTO DE LINEAS
lineBets.forEach(lineBet => {
    lineBet.addEventListener('click', function () {
        const whichLine = lineBet.id;
        const lineNumbers = lines[whichLine];
        if (lineNumbers && fichaSeleccionada) {
            lineNumbers.forEach(() => {
                agregarApuesta(`lineBet-${whichLine}`, fichaSeleccionada);
                colocarFicha(whichLine, fichaSeleccionada); // ! COLOCAR FICHA ENCIMA
            });
        }
    });
});

// * EVENTO DE TERCIOS
thirdBets.forEach(thirdBet => {
    thirdBet.addEventListener('click', function () {
        const whichThird = thirdBet.id;
        const thirdNumbers = thirds[whichThird];
        if (thirdNumbers && fichaSeleccionada) {
            thirdNumbers.forEach(() => {
                agregarApuesta(`thirdBet-${whichThird}`, fichaSeleccionada);
                colocarFicha(whichThird, fichaSeleccionada); // ! COLOCAR FICHA ENCIMA
            });
        }
    });
});

// & ================= EVENTOS DE APUESTAS 1/2 ======================
// * EVENTO DE PRIMERA MITAD
document.getElementById('half-1').addEventListener('click', function () {
    if (fichaSeleccionada) {
        agregarApuesta('half-1', fichaSeleccionada);
        colocarFicha('half-1', fichaSeleccionada); // ? Coloca la ficha
    } else {
        console.warn("No se ha seleccionado una ficha.");
    }
});


// * EVENTO DE SEGUNDA MITAD
document.getElementById('half-2').addEventListener('click', function () {
    if (fichaSeleccionada) {
        agregarApuesta('half-2', fichaSeleccionada);
        colocarFicha('half-2', fichaSeleccionada); // ? Coloca la ficha
    } else {
        console.warn("No se ha seleccionado una ficha.");
    }
});

// * EVENTO DE BOTON ROJO
redButton.addEventListener('click', function () {
    if (fichaSeleccionada) {
        agregarApuesta('red', fichaSeleccionada);
        colocarFicha('red', fichaSeleccionada);  // ? Coloca la ficha
    } else {
        console.warn("No se ha seleccionado una ficha.");
    }
});


// * EVENTO DE BOTON NEGRO
blackButton.addEventListener('click', function () {
    if (fichaSeleccionada) {
        agregarApuesta('black', fichaSeleccionada);
        colocarFicha('black', fichaSeleccionada);  // ? Coloca la ficha
    } else {
        console.warn("No se ha seleccionado una ficha.");
    }
});

// * EVENTO DE BOTON IMPAR
document.getElementById('odd').addEventListener('click', function () {
    if (fichaSeleccionada) {
        agregarApuesta('odd', fichaSeleccionada);
        colocarFicha('odd', fichaSeleccionada);  // ? Coloca la ficha
    } else {
        console.warn("No se ha seleccionado una ficha.");
    }
});


// * EVENTO DE BOTON PAR
document.getElementById('even').addEventListener('click', function () {
    if (fichaSeleccionada) {
        agregarApuesta('even', fichaSeleccionada);
        colocarFicha('even', fichaSeleccionada);  // ? Coloca la ficha
    } else {
        console.warn("No se ha seleccionado una ficha.");
    }
});

// - ================================================================

// - ================= DECLARACIONES INICALES =======================

balance = 5000; // + Balance inicial
actualizarBalance(); // ? Mostrar el balance inicial
