// Proporcione un ejemplo para convertir un callback en una promesa

function esperarPromesa(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Espera de ${ms}ms completada`);
        }, ms);
    });
}

// Uso fácil:
esperarPromesa(2000)
    .then(mensaje => {
        console.log(mensaje);
        return esperarPromesa(1000);
    })
    .then(mensaje => {
        console.log(mensaje);
    });

// O con async/await más simple:
async function ejemplo() {
    const mensaje1 = await esperarPromesa(2000);
    console.log(mensaje1);
    
    const mensaje2 = await esperarPromesa(1000);
    console.log(mensaje2);
}