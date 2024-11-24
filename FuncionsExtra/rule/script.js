// Array con los fichas específicos
const fichas = ["chip-1", "chip-5", "chip-10", "chip-20", "chip-50", "chip-100", "chip-500", "chip-1000", "chip-5000"];
let fichaSeleccionada = Number();


const bets = [];
const odd = [];
const even = [];
const red = []
const black = [];

const numberBets = document.querySelectorAll('.numbers');


const lines = {
    'lineBet-1': ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36'],
    'lineBet-2': ['2', '5', '8', '11', '14', '17', '20', '23', '26', '29', '32', '35'],
    'lineBet-3': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34']
};
const lineBets = document.querySelectorAll('.bet-2-to-1');

const thirds = {
    'thirdBet-1': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    'thirdBet-2': ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
    'thirdBet-3': ['25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36']
}
const thirdBets = document.querySelectorAll('.docena-bet')

// + Asignar eventos a cada ficha por su valor
fichas.forEach(valor => {
    const ficha = document.getElementById(valor.toString());

    if (ficha) {
        ficha.addEventListener('click', function () {
            fichaSeleccionada = Number(valor);
            console.log(`Has hecho clic en el ficha con valor: ${fichaSeleccionada}`)
            console.log(`Tipo de 'valor': ${typeof fichaSeleccionada}`); // Siempre será "number" en el array
        });
    }
    if (!ficha) {
        console.warn(`No se encontró un elemento con id: ${valor}`);
    }
});

numberBets.forEach(numberBet => {
    numberBet.addEventListener('click', function () {
        const number = numberBet.textContent.trim(); // ? Obtiene el número del div
        number.forEach(i => {
            // ? Verifica si el número ya está en bets
            if (!bets.includes(i)) {
                bets.push(i); // ! Lo agrega al array de apuestas
            }
        });
        console.log(bets); // ? Muestra el array actualizado en la consola
    });

    // - Agregar numeros a even/black y odd/red para mas tarde
    const number = parseInt(numberBet.textContent.trim(), 10); // Convierte el texto a número
    if (!isNaN(number)) {
        if (number % 2 === 0) {
            even.push(number);
            black.push(number);
            // console.log(`Even: ${even}`);
            // console.log(`Black: ${black}`);
        } else {
            odd.push(number);
            red.push(number);
            // console.log(`Odd: ${odd}`);
            // console.log(`Red: ${red}`);
        }
    }
});

// + Agrega evento click a los divs de línea de apuestas
lineBets.forEach(lineBet => {
    lineBet.addEventListener('click', function () {
        const whichLine = lineBet.id; // ? Obtiene el ID de la linea que hayas apostado
        const lineNumbers = lines[whichLine]; // ? Obtiene los números asociados

        if (lineNumbers) {
            // ! Agrega todos los números al array de apuestas
            lineNumbers.forEach(number => {
                if (!bets.includes(number)) {
                    bets.push(number);
                }
            });
            console.log(`Línea seleccionada: ${whichLine}`);
            console.log(`Números añadidos: ${lineNumbers}`);
            console.log(`Bets: ${bets}`);
        } else {
            console.error(`No se encontraron números asociados para ${whichLine}`);
        }
    });
});

// + Agrega evento click a los divs de tercios de apuestas
thirdBets.forEach(thirdBet => {
    thirdBet.addEventListener('click', function () {
        const whichThird = thirdBet.id;
        const thirdNumbers = thirds[whichThird];

        if (thirdNumbers) {
            thirdNumbers.forEach(number => {
                if (!bets.includes(number)) {
                    bets.push(number);
                }
            });
        }
        else {
            console.error(`No se encontraron números asociados para ${whichThird}`)
        }
    })
});

