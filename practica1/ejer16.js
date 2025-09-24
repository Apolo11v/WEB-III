// Proporcione un ejemplo para migrar una función con promesas a async/await.
async function ejemploBasico() {
    try {
        console.log('Paso 1: Iniciando...');
        
        // Simulamos una promesa de espera
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Paso 2: Después de 1 segundo');
        
        // Otra espera
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log('Paso 3: Después de 0.5 segundos más');
        
        return 'Proceso completado!';
        
    } catch (error) {
        console.error('Error:', error);
    }
}

ejemploBasico().then(resultado => {
    console.log('Resultado final:', resultado);
});

console.log('Función iniciada (esto se muestra primero)');