// 1. Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el
// resultado en un objeto.
// let obj = miFuncion(“euforia”)
// console.log(obj) // { a: 1, e: 1, i: 1, o: 1, u: 1 }

let palabra = "euforiaaa";
let obj;
let a=0, e=0, i=0, o=0, u=0;
function miFuncion(){
    for(let j=0; j<palabra.length; j++){
        obj=palabra[j];
        if (obj== 'a'){a++}
        if(obj== 'e'){e++}
        if(obj== 'i'){i++}
        if(obj== 'o'){o++}
        if(obj== 'u'){u++}

        }
 
    console.log("{a:"+a+" e:"+e+" i:"+i+" o:"+o+" u:"+u+"}");
    }

miFuncion()