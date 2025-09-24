// Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares
// e impares:
// let obj = miFuncion([1,2,3,4,5])
// console.log(obj) // { pares: [2,4], impares: [1,3,5]}

function paresImpares(numero){
    let pares=[];
    let impares=[];
    for (let i = 0; i < numero.length; i++) {
        if (numero[i]%2 == 0) {
            pares.push(numero[i]);
        }else{
            impares.push(numero[i]);
        }
        
    }
    return {pares,impares};
}
let obj= paresImpares([1,2,3,4,5])
console.log(obj);
