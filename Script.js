
        function procesoDeIngreso() {
            let nombre = prompt("Por favor, ingrese su nombre:");
            let edad = parseInt(prompt("Por favor, ingrese su edad:"));
            
            if (isNaN(edad)) {
                alert("Por favor, ingrese una edad válida.");
            } else {
                if (edad >= 18) {
                    alert("¡Bienvenido, " + nombre + "! Puede acceder al sitio.");
                } else {
                    alert("Lo siento, " + nombre + ". Usted es menor de edad y no puede acceder al sitio.");
                }
            }
        }
