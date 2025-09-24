// Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y
// al revés).
// let band = miFuncion(“oruro”)
// console.log(band) // true
// let band = miFuncion(“hola”)
// console.log(band) // false

function palindromo(palabra){
    let resultado = "";
    for (let i = palabra.length -1; i>=0; i--) {
        resultado+= palabra[i];
        
    }
    if (resultado==palabra) {
        return true;
    }else{
        return false;
    }

}
let band = palindromo("oruro");
console.log(band);
let band2 = palindromo("hola");
console.log(band2);

