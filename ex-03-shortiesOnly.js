/**
 * shortiesOnly()
 *
 * Write a function called `shortiesOnly`.
 * It should as input an array of strings,
 * and it should return a new array containing
 * only those strings with 4 or fewer characters.
 *

conoser todos los elementos de la cadena
AGRUPAR los elementos que contengan 4 o menos de longitud
*/


function shortiesOnly(cadena){
    let nuevaCadena = []
    for( let i =  0; i < cadena.length; i++){
        let contador = cadena[i].length
        //console.log(contador)
        if (contador <= 4) {
            nuevaCadena.push(cadena[i])
        }


    }
    return nuevaCadena
    
}







//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]

var shortList = shortiesOnly(allNames)

console.assert( shortList.length === 4 )


// checks to see that 'Sam' is INCUDED in the output array.
console.assert( shortList.indexOf('Sam') >= 0 )

// checks to see that 'Fred' is INCUDED in the output array.
console.assert( shortList.indexOf('Fred') >= 0 )

// checks to see that WAYNE is NOT in the output array.
console.assert( shortList.indexOf('Wayne') === -1 )
