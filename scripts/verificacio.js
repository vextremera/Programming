// // ! EXERCICI 1
// let nota = parseInt(prompt("digues la teva nota"));

// (nota < 0) ? alert("Digues un número del 1 al 10")
//     : (nota > 10) ? alert("Digues un número del 1 al 10")
//         : (nota >= 5) ? alert("APROVAT")
//         : alert("Suspes, a secundaria")


// // ! EXERCICI 2
// let dia = parseInt(prompt("Digues un numero del 1 al 7"));

// (dia < 0) ? alert("Un numero del 1 al 7")
//     : (dia > 7) ? alert("Un numero del 1 al 7")
//         : (dia == 1) ? alert("Dilluns")
//         : (dia == 2) ? alert("Dimarts")
//         : (dia == 3) ? alert("Dimecres")
//         : (dia == 4) ? alert("Dijous")
//         : (dia == 5) ? alert("Divendres")
//         : (dia == 6) ? alert("Dissabte")
//         : alert("Diumenge")

// // ! EXERCICI 3
// let temperatura = parseInt(prompt("digues la temperatura"));
// let humitat = parseInt(prompt("digues la humitat"));

// ((temperatura <= 25 && temperatura >= 5) && (humitat <= 80 && humitat >= 40)) ? alert("temperatura y humitat entre els valors correctes")
//     // : (temperatura > 25 || temperatura < 5 || humitat > 80 || humitat < 40) ? alert("ALERTAAAA!!! VALORS FORA DELS MARGES")
//     : alert("ALERTAAAA!!! VALORS FORA DELS MARGES")

// // ! EXERCICI 4
// let notaEx4 = parseInt(prompt("Introdueix la teva nota:"));

// (notaEx4 > 10 || notaEx4 < 1) ? alert("ERROR! Introdueix un número del 1 al 10")
//     : (notaEx4 < 3) ? alert("Has de millorar moooolt!")
//     : (notaEx4 >= 3 && notaEx4 < 5) ? alert("Encara et falta una mica per aprovar")
//     : (notaEx4 >= 5 && notaEx4 < 7) ? alert("No vas malament però segur que pots millorar una mica")
//     : (notaEx4 >= 7 && notaEx4 < 9) ? alert("Força bé")
//     : alert("Excel·lent!")

// // ! EXERCICI 5
// let n1, n2, n3;

// n1 = parseInt(prompt("Introdueix primer número"));
// n2 = parseInt(prompt("Introdueix segon número"));
// n3 = parseInt(prompt("Introdueix tercer número"));

// if (n1 <= n2 && n1 <= n3) {    // n1 és el més petit
//     if (n2 < n3) alert(n1 + " " + n2 + " " + n3);
//     else alert(n1 + " " + n3 + " " + n2);
// } else if (n2 <= n1 && n2 <= n3) {    // n2 és el més petit
//     if (n1 < n3) alert(n2 + " " + n1 + " " + n3);
//     else alert(n2 + " " + n3 + " " + n1);
// } else {    // n3 és el més petit
//     if (n1 < n2) alert(n3 + " " + n1 + " " + n2);
//     else alert(n3 + " " + n2 + " " + n1);
// }

// // ! EXERCICI 6
// let mes;

// mes = parseInt(prompt("Introdueix número del mes (1-12)"));

// if (mes >= 1 && mes <= 12) {
//     if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12)
//         alert("31 dies");
//     else if (mes == 4 || mes == 6 || mes == 9 || mes == 11)
//         alert("30 dies");
//     else {
//         let any = parseInt(prompt("Quin any?"));
//         if (any % 400 == 0 || (any % 4 == 0 && any % 100 != 0))
//             alert("29 dies");
//         else
//             alert("28 dies");
//     }
// } else {
//     alert("Error: mes ha d'estar entre 1 i 12");
// }

// // ! EXERICIC 7
// let nArmaris = parseInt(prompt("Introdueix el nombre d'armaris buits"));
// let nPrestatgesArmari = parseInt(prompt("Introdueix el nombre de prestatges que té cada armari"));
// let nLlibresPrestatge = parseInt(prompt("Introdueix el nombre de llibres que té cada prestatge"));
// let nLlibres = parseInt(prompt("Introdueix el nombre de llibres nous que s'han rebut"));

// if (nArmaris <= 0 || nPrestatgesArmari <= 0 || nLlibresPrestatge <= 0 || nLlibres <= 0)
//     alert("ERROR en alguna de les dades introduïdes");
// else {
//     int capacitatArmari = nPrestatgesArmari * nLlibresPrestatge;

//     // Comprovar si els llibres hi caben (no és imprescindible)
//     // int capacitatTotal = nArmaris * capacitatArmari;
//     // if (capacitatTotal >= nLlibres) … // hi caben

//     int nArmarisNecessaris = nLlibres / capacitatArmari;
//     if (nLlibres % capacitatArmari != 0) ++nArmarisNecessaris;

//     if (nArmarisNecessaris <= nArmaris) {
//         alert("Sobren " + (nArmaris - nArmarisNecessaris) + " armaris");
//     } else {
//         alert("Falten " + (nArmarisNecessaris - nArmaris) + " armaris");
//     }
// }

// // ! EXERCICI 8
// let t;

// t = parseInt(prompt("Introdueix la temperatura"));

// // Utilitzant operador ternari
// let m = (t < 20) ? "On" : "Off";

// // Utilitzant if
// if (t < 20) m = "On";
// else m =  "Off";

// if (m == "On") alert("Calefacció encesa");
// else alert("Calefacció apagada");

// // ! EXERCICI 9
// let t;

// t = parseInt(prompt("Introdueix la temperatura"));

// // Utilitzant operador ternari
// let v = (t < 20) ? -1 : (t > 24 ? +1 : 0);

// // Utilitzant if
// if (t < 20) v= -1;
// else if (t > 24) v = 1;
// else v = 0;

// if (v == -1) alert("Calefacció encesa");
// else if (v == 1) alert("Aire condicionat encès");
// else alert("Què bé! Estem estalviant energia!");