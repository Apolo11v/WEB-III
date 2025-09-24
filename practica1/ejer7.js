// Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
// elementos de un arreglo, mediante desestructuración.

const arreglo = [1, 2, 3, 4, 5];

const [primero, segundo, ...resto] = arreglo;

console.log(primero); 
console.log(segundo); 
console.log(resto);   