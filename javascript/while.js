// // ! EXERCICI 1
// const CONTRA = "123";

// let contrasenya;

// let intents = 3;

// contrasenya = prompt("Escriu la teva contrasenya");
// intents--

// while (contrasenya != "123" && intents != 0){
//     alert(`la teva contarsenya és incorrecta, et queden ${intents}`);
//     contrasenya = prompt("Escriu la teva contrasenya");
//     intents--
//     // (contrasenya != "123") ? alert(`Aquesta contrasenya és incorrecta, et queden ${intents}!!!`)
// }

// (contrasenya == "123") ? alert("Contrasenya correcta")
// // : (intents == 0) ? alert("Torna un altre dia")
// : alert("La teva contarsenya és incorrecta. Torna un altre dia")

// // ! EXERCICI 2

// const CANVI = "CANVI";
// let semafor = 1;

// do{
//     switch (semafor){
//         case 1:
//             alert("Semafor verd")
//             break;
//         case 2:
//             alert("Semafor taronja")
//             break;
//         case 3:
//             alert("Semafor vermell")
//             break;
//     }
//     let paraulaClau = prompt("Escriu la parula clau").toUpperCase(); 

//     if (paraulaClau == CANVI){
//         semafor++
//         if (semafor > 3) semafor = 1;
//     }
//     else semafor = -1 
// }
// while(semafor != -1);

// alert("El semafor s'ha trencat.")

// // ! EXERCICI 3

// let gran, petit, prompts;

// while (prompts != 0){
//     prompts = parseInt(prompt("Escriu un númeron positiu, 0 si vols finalitzar"))
//     if (prompts != 0){
//         if (prompts > gran) gran = prompts
//         if (prompts < petit) petit = prompts
//     }
// }

// if (gran == 0) {
//     alert("No has posat cap número")
// }
// else {
//     alert(`El numeró més gran és ${gran}`)
//     alert(`El numeró més gran és ${petit}`)
// }

// // ! EXERCICI 4
// let numero, factorial;

// numero = parseInt(prompt("Introdueix número positiu"));

// factorial = numero;

// while (numero > 1) {
//     --numero;
//     factorial *= numero;
// }

// alert(factorial);

// // ! EXERCICI 5
// let num, resposta, intents = 0;

// num = (int)(Math.random() * 100 + 1);
// do {
//     resposta = parseInt(prompt("Escull un número del 1 al 100"));

//     ++intents;

//     if (num > resposta) {
//         alert("Més MAJOR");
//     } else if (num < resposta) {
//         alert("És MENOR");
//     }
// } while (resposta != num);

// alert("Has fet " + intents + " intents");

// // ! EXERCICI 6
// let input, pasos = 0;

// input = parseInt(prompt("Escriu un número del 1 al 100"));

// while (input !== 1){
//     if (input % 2 == 0){
//         input /= 2;
//     }
//     else{
//         input = input * 3 + 1;
//     }
    
//     alert(input);
//     pasos++
// }

// alert(`hi han ${pasos} interaccions`);

// ! EXERCICI 7
let notaAlumne, suspesos = 0, total = 0, numeros = 0, mitjana = 0;

do{
    notaAlumne = parseInt(prompt("Escriu la teva nota del 1 al 10"))
    if (notaAlumne > 0 && notaAlumne <= 10){
        total += notaAlumne;
        numeros++;
        if (notaAlumne < 5) suspesos++;
    }
    else {
        if(notaAlumne != 0) alert("Ha de ser un número del 1 al 10");
    }
} while (notaAlumne != 0);

mitjana = total / numeros;

if (numeros > 0){
    alert("han suspes " +suspesos)
    alert("La mitjana de les notes és " + mitjana)
}
else{
    alert("hi han cero notes a calcular")
}