// Crear una función que reciba un arreglo de números y devuelva el número mayor y el
// menor, en un objeto.
// let obj = miFuncion([3,1,5,4,2])
// console.log(obj) // { mayor: 5, menor: 1 }

function mayorMenor(numero){
    let mayor= numero[0];
    let menor= numero[0];
    
    for (let i = 0; i < numero.length; i++) {
         if (numero[i]>mayor) {
            mayor=numero[i];
         }
            
        if (numero[i]<menor) {
            menor=numero[i];
        }
           
    }
    return {mayor,menor}
}
let obj= mayorMenor([3,1,5,4,2])
console.log(obj);
