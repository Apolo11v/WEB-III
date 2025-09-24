// Proporcione un ejemplo concreto de encadenamiento de promesas.

function sumar(numero, valor) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const resultado = numero + valor;
            console.log(`${numero} + ${valor} = ${resultado}`);
            resolve(resultado);
        }, 500);
    });
}

Promise.resolve(10) // Empezamos con el número 10
    .then(num => sumar(num, 5))    // 10 + 5 = 15
    .then(num => sumar(num, 3))    // 15 + 3 = 18  
    .then(num => sumar(num, 7))    // 18 + 7 = 25
    .then(num => console.log("Total final:", num));