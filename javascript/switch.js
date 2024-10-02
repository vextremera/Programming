// // ! EXERCICI 1
// let n1, n2, op, resultat;

// n1 = parseFloat(prompt("Introdueix un numero"))
// op = prompt("Introdueix una operació (+  -  *  /)")
// n2 = parseFloat(prompt("Escriu el segon número"))

// switch(op){
//     case "+":
//         resultat = n1 + n2;
//         break;
//     case "-":
//         resultat = n1 - n2;
//         break;
//     case "*":
//         resultat = n1 * n2;
//         break;
//     case "/":
//         resultat = n1 / n2;
//         break;
//     default:
//         alert("Aquesta operació no és correcta");
//         break;
// }
// alert(`El resultat és ${resultat}`);
    
// // ! EXERCICI 2
// let mes = prompt("Escriu un mes de l'any");
// let any;
// mes = mes.toLocaleUpperCase();

// switch(mes){
//     case "GENER":
//     case "MARÇ":
//     case "MAIG":
//     case "JULIOL":
//     case "AGOST":
//     case "OCTUBRE":
//     case "DESEMBRE":
//         alert("El mes " +mes, "té 31 dies")
//         break;
//     case "ABRIL":
//     case "JUNY":
//     case "SETEMBRE":
//     case "NOVEMBRE":
//         alert("El mes " +mes, " té 30 dies")
//         break;
//     case "FEBRER":
//         any = prompt("De quin any?");
//         if (any % 400 == 0 || (any % 4 == 0 && any % 100 != 0))
//             alert("Nombre de dies: 29");
//         else 
//             alert("Nombre de dies: 28");
//         break;
//     default:
//         alert("No se quin mes és "+mes)
// }

// // ! EXERCICI 3
// let nota;

// nota = prompt("Escriu una lletra (A, B, C, D)").toUpperCase();

// switch(nota){
//     case "A":
//         alert("Excel·lent (9-10)")
//         break;
//     case "B":
//         alert("Notable (7-8)")
//         break;
//     case "C":
//         alert("Aprovat (5-6)")
//         break;
//     case "D":
//         alert("Suspes (1-4)")
//         break;
//     default:
//         alert("No se quina nota és "+nota)
// }

// // ! EXERCICI 4
// let notaNumero;

// notaNumero = parseInt(prompt("Escriu un número 1-10"));

// switch(notaNumero){
//     case "10":
//     case "9":
//         alert("Excel·lent (A)")
//         break;
//     case "8":
//     case "7":
//         alert("Notable (B)")
//         break;
//     case "6":
//     case "5":
//         alert("Aprovat (5-6)")
//         break;
//     case "4":
//     case "3":
//     case "2":
//     case "1":
//         alert("Suspes (1-4)")
//         break;
//     default:
//         if (notaNumero > 10) alert("El número no pot ser superior a 10")
//         else if (notaNumero < 1) alert("El numero no pot ser inferior a 1")
// }

// // ! EXERCICI 5
// let temperatura, tos, pressio, categoria;

// temperatura = parseInt(prompt("Escriu la temperatura"))
// tos = prompt("Escriu la gravetat de la tos (No, Seca, Expectorant)").toUpperCase()
// pressio = parseInt(prompt("Escriu la pressió"))

// if (temperatura < 25 || temperatura > 45) alert(`No pot estar a ${temperatura} graus`);
// if (tos == !("NO" || "SECA" || "EXPECTORANT")) alert(`${tos} = això no es un grau de tos`);
// if (pressio < 80 || pressio > 180) alert(`No pot estar a aquesta pressio: ${pressio}`);
// else if (temperatura < 32 || temperatura > 42 || pressio < 100) categoria = "M"
// else if ((temperatura > 35 && temperatura < 38) && tos == NO && (pressio > 120 && pressio < 140)) categoria = "E"
// else if (temperatura > 38 && tos == EXPECTORANT) categoria = "D"
// else if (temperatura > 38 && tos == SECA) categoria = "C"
// else if ((temperatura > 35 && temperatura < 38) && tos == NO && (pressio < 120 || pressio > 140)) categoria = "B"
// else categoria = "A";

// switch(categoria){
//     case "A":
//         alert("Fes-lo esperar una mica i li passes al Dr House, el de 'casos especials'.")
//         break;
//     case "B":
//         alert("Ràpid! Que vingui un cardiòleg!")
//         break;
//     case "C":
//         alert("Envia'l a la planta COVID.")
//         break;
//     case "D":
//         alert("L'ha de visitar el neumòleg d'urgències.")
//         break;
//     case "E":
//         alert("Que esperi sentat... o estirat.")
//         break;
//     case "M":
//         alert("Que esperi sentat... o estirat.")
//         alert("No hi ha res a fer.")
//         break;
//     default:
//         alert("Això no es una categoria")
// }

// // ! EXERCICI 6
// let temperatura, tos, pressio, categoria;

// temperatura = parseInt(prompt("Escriu la temperatura"));
// tos = prompt("Escriu la gravetat de la tos (No, Seca, Expectorant)").toUpperCase();
// pressio = parseInt(prompt("Escriu la pressió"));

// if (temperatura < 25 || temperatura > 45) alert(`No pot estar a ${temperatura} graus`);
// if (tos == !("NO" || "SECA" || "EXPECTORANT")) alert(`${tos} = això no es un grau de tos`);
// if (pressio < 80 || pressio > 180) alert(`No pot estar a aquesta pressio: ${pressio}`);

// else if (temperatura < 32 || temperatura > 42 || pressio < 100) {
//     categoria = "M";
//     alert("Que esperi sentat... o estirat.");
//     alert("No hi ha res a fer.");
// }
// else if ((temperatura > 35 && temperatura < 38) && tos == "NO" && (pressio > 120 && pressio < 140)){
//     categoria = "E";
//     alert("Que esperi sentat... o estirat.");
// } 
// else if (temperatura > 38 && tos == "EXPECTORANT") {
//     categoria = "D";
//     alert("L'ha de visitar el neumòleg d'urgències.");
// }
// else if (temperatura > 38 && tos == "SECA") {
//     categoria = "C";
//     alert("Envia'l a la planta COVID.");
// }
// else if ((temperatura > 35 && temperatura < 38) && tos == "NO" && (pressio < 120 || pressio > 140)) {
//     categoria = "B";
//     alert("Ràpid! Que vingui un cardiòleg!");
// }
// else {
// categoria = "A";
// alert("Fes-lo esperar una mica i li passes al Dr House, el de 'casos especials'.");
// }

// ! FES-LO EN PAGINA WEB
document.getElementById("accept-button").addEventListener("click", function() {
    const TEMP = document.getElementById("temp")
    const TOS = document.getElementById("tos")
    const PRESSIO = document.getElementById("pressio")
    const RESULT = document.getElementById("result")

    let temperatura, tos, pressio, categoria;

    temperatura = TEMP.textContent;

    switch(TOS){
        case("NO"):
            tos = "NO";
            break;
        case("SECA"):
            tos = "SECA";
            break;
        case("EXPECTORANT"):
            tos = "EXPECTORANT";
            break;
        default:
            return;
    }

    pressio = PRESSIO.textContent;

    if (temperatura < 25 || temperatura > 45) RESULT.textContent = (`No pot estar a ${temperatura} graus`);
    if (tos == !("NO" || "SECA" || "EXPECTORANT")) RESULT.textContent = (`${tos} = això no es un grau de tos`);
    if (pressio < 80 || pressio > 180) RESULT.textContent = (`No pot estar a aquesta pressio: ${pressio}`);
    else if (temperatura < 32 || temperatura > 42 || pressio < 100) categoria = "M"
    else if ((temperatura > 35 && temperatura < 38) && tos == NO && (pressio > 120 && pressio < 140)) categoria = "E"
    else if (temperatura > 38 && tos == EXPECTORANT) categoria = "D"
    else if (temperatura > 38 && tos == SECA) categoria = "C"
    else if ((temperatura > 35 && temperatura < 38) && tos == NO && (pressio < 120 || pressio > 140)) categoria = "B"
    else categoria = "A";

    switch(categoria){
        case "A": RESULT.textContent = "Fes-lo esperar una mica i li passes al Dr House, el de 'casos especials'."; break;
        case "B": RESULT.textContent = "Ràpid! Que vingui un cardiòleg!"; break;
        case "C": RESULT.textContent = "Envia'l a la planta COVID."; break;
        case "D": RESULT.textContent = "L'ha de visitar el neumòleg d'urgències."; break;
        case "E": RESULT.textContent = "Que esperi sentat... o estirat."; break;
        case "M": RESULT.textContent = "No hi ha res a fer."; break;
        default: RESULT.textContent = "Això no es una categoria vàlida";
    }
});