// // ! EXERCICI 1
// for(let i = 25; i <= 100; i += 5){
//     alert(i)
// }

// ! EXERCICI 2
// for(let i = 1; i <= 100; i++){
//     if (i % 2 == 0) console.log(i + " Es multiple de 2");
//     if (i % 3 == 0) console.log(i + " Es multiple de 3");
//     if (i % 5 == 0) console.log(i + " Es multiple de 5");
// }

// for(let i = 1; i <= 100; i++){
//     if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) console.log(i + " es multiple de 2, 3 i 5")
// }

// // ! EXERCICI 3
// function esperarUnSegundo() {
//     return new Promise(resolve => {
//         setTimeout(resolve, 1000); // 1 segundo
//     });
// }

// async function ejecutarConEspera() {
//     for(let i = 10; i >= 0; i--) {
//         console.log(i);
//         await esperarUnSegundo(); // Espera 1 segundo antes de continuar la siguiente iteración
//     }
//     console.log("¡Compte enrere acabada!");
// }

// ejecutarConEspera();

// // ! EXERCICI 4
// let num = parseInt(prompt("Digues un número"))

// for(let i = 1; i <= 10; i++){
//     console.log(num + " x " + i + " = " + num * i)
// }

// // ! EXERCICI 5
// let numeros = prompt("Entre quins números penso?");
// let [num1, num2] = numeros.split(" ").map(Number);
// // console.log(num1);
// // console.log(num2);
// let min = Math.min(num1, num2);
// let max = Math.max(num1, num2);

// let random = Math.random() * (max - min) + min;
// random = Math.trunc(random);

// console.log(random);

// let intents = parseInt(prompt("Escriu el número d'intents"))
// let acabat = 0;

// let numeroEscollit = 0;
// for (let i = 1; i <= intents; i++){
//     acabat++

//     numeroEscollit = parseInt(prompt("Digues un número"))
//     if (numeroEscollit == random) {
//         console.log("Has encertat")
//     }
//     else if (numeroEscollit != random) {
//         if(numeroEscollit > random) console.log("Més petit")
//         else if (numeroEscollit < random) console.log("Més gran")
//     }
// }
// if (acabat >= intents && numeroEscollit != random) {
//     console.log("S'han acabat els intents, el número era "+random)
// }

// // ! EXERCICI 6
// let asteriscos = parseInt(prompt("Digues un número d'asteriscos 1-80"))

// if (asteriscos >= 1 && asteriscos <= 80) {
//     let linea = '';
//     for (let i = 0; i < asteriscos; i++) {
//         linea += 00'*';
//     }
//     console.log(linea)
// }

// // ! EXERCICI 7
// let asterisc = parseInt(prompt("Digues un número"))
// let linia = "";

// for (let i = 0; i < asterisc; i++){
//     linia = "";
//     for(let j = 0; j <= i; j++){
//         linia += "*";
//     }
//     console.log(linia);
// }

// // ! EXERCICI 8
// // * 1
// let coordenades = '';
// for (let x = -5; x <= 5; x++) {
//     let y = ((x - 2) / 5) ** 2 + 4;
//     coordenades += `(${x.toFixed(1)}|${y.toFixed(1)}) `;
// }
// console.log(coordenades.trim());

// // * 0,5
// let coordenada = '';
// for (let x = -5; x <= 5; x += 0.5) {
//     let y = ((x - 2) / 5) ** 2 + 4;
//     coordenada += `(${x.toFixed(1)}|${y.toFixed(1)}) `;
// }
// console.log(coordenada.trim());

// // ! EXERCICI 9
// // * HORIZONTAL
// let valors = [8, 12, 5];

// let simbols = ['*', '#', '+'];

// // Dibuixar el gràfic de barres horitzontal
// for (let i = 0; i < valors.length; i++) {
//     for (let j = 0; j < 2; j++) { // Amplada 2
//         let barra = '';
//         for (let k = 0; k < valors[i]; k++) {
//             barra += simbols[i]; // Dibuixar la barra amb el símbol corresponent
//         }
//         console.log(barra);
//     }
// }


// // * VERTICAL (INVERTIT)
// const valors2 = [5, 8, 3];

// // Símbols per a cada barra
// const simbols = ['#', 'O', 'X'];

// // Amplada de cada barra
// const amplada = 5;

// // Gràfic de barres vertical invertit (cap avall)
// console.log("Gràfic de barres vertical (invertit):");
// const altura = Math.max(...valors2); // Altura màxima de les barres

// for (let i = 0; i < altura; i++) {
//     let fila = '';
//     for (let j = 0; j < valors2.length; j++) {
//         if (i < altura - valors2[j]) {
//             // Espai buit per a la barra
//             fila += ' '.repeat(amplada); // Espai de la mateixa amplada que la barra
//         } else {
//             // Dibuixar la barra amb el símbol corresponent
//             fila += simbols[j].repeat(amplada); // Amplada 5
//         }
//         fila += ' '; // Espai entre les barres
//     }
//     console.log(fila); // Imprimir la fila
// }

// // * VERTICAL (CAP AMUNT)
// const valors3 = [5, 8, 3];

// // Símbols per a cada barra
// const simbols2 = ['#', 'O', 'X'];

// // Amplada de cada barra
// const amplada2 = 5;
// // Gràfic de barres vertical (cap amunt)
// console.log("\nGràfic de barres vertical (cap amunt):");
// const altura2 = Math.max(...valors3); // Altura màxima de les barres

// for (let i = 0; i < altura2; i++) {
//     let fila = '';
//     for (let j = 0; j < valors3.length; j++) {
//         if (i < valors3[j]) {
//             // Dibuixar la barra amb el símbol corresponent
//             fila += simbols2[j].repeat(amplada2); // Amplada 5
//         } else {
//             // Espai buit per a la barra
//             fila += ' '.repeat(amplada2); // Espai de la mateixa amplada que la barra
//         }
//         fila += ' '; // Espai entre les barres
//     }
//     console.log(fila); // Imprimir la fila
// }

// // ! EXERCICI 10
// let linia = "";
// let calculo = 0;
// for (let i = 1; i <= 10; i++){
//     linia = "";
//     for(let j = 1; j <= 10; j++){
//         calculo = i*j;
//         // linia += calculo + " ";
//         linia += ("" + calculo).padStart(5," ")
//     }
//     console.log(linia)
// }

// ! EXERCICI 11
let numero1 = -1
let numero2 = 1;
let min = Math.min(numero1, numero2);
let max = Math.max(numero1, numero2);

let a = Math.random() * (max - min) + min; //Donarà un número aleatori entre -1 i 1 amb decimals
let b = Math.random() * (max - min) + min;
console.log(a);
console.log(b);

let comptador = 0;
let h;

for(let i = 0; i <= 400; i++){
    h = (a*a) + (b*b);
    h = Math.sqrt(h);
    if (h <= 1) comptador++;
}

console.log(comptador);