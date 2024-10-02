const inputText = document.getElementById("calculator-text");

    const buttons = document.querySelectorAll("#number-buttons button, #calculator-buttons button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.id === "igual") {
                calcular();
            } else if (button.id === "repeat") {
                limpiar();
            } else {
                agregarTexto(button.textContent);
            }
        });
    });

    function agregarTexto(texto) {
        const lastChar = inputText.value.slice(-1);
    
        // Evitar añadir un operador si el último carácter es un operador
        if (["+", "-", "*", "/"].includes(lastChar) && ["+", "-", "*", "/"].includes(texto)) {
            return; // No añadir si ya hay un operador
        }
    
        // Permitir solo dos operadores iguales consecutivos
        const operatorCount = inputText.value.match(/[\+\-\*\/]/g) || [];
        if (operatorCount.length >= 2 && operatorCount[operatorCount.length - 1] === texto) {
            return; // No añadir si ya hay dos operadores iguales
        }
    
        inputText.value += texto;
    }

    function calcular() {
        try {
            // Evalúa la expresión en el input
            const resultado = eval(inputText.value);
            inputText.value = resultado;
        } catch (e) {
            inputText.value = "Error";
        }
    }

    function limpiar() {
        inputText.value = "";
    }