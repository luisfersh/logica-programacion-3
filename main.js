function calcularFactorial() {
    let entrada = document.getElementById("numero").value.trim();
    let numero = Number(entrada);
    let resultado = document.getElementById("resultado");

    // Validar que escriba un número entero valido
    if (entrada === "" || isNaN(numero) || numero < 0 || numero % 1 !== 0 || numero > 170) {
        resultado.textContent = "Error: Por favor, ingrese un número entero válido entre 0 y 170.";
        document.getElementById("numero").value = "";
        document.getElementById("numero").focus();
    } else {
        let factorial = 1;

        for (let i = 1; i <= numero; i++) {
            factorial = factorial * i;
        }

        resultado.textContent = "El factorial de " + numero + " es " + factorial;
        console.log("El factorial de " + numero + " es " + factorial);

    }
}