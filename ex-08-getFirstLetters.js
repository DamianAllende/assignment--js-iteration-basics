
/**
 * getFirstLetters()
 *
 * Write a function called `getFirstLetters` that takes an array of strings
 * and returns another array of strings with only the first letter
 *
 * Hint: you may want to invoke the `reverseString` function you wrote earlier
 * from the previous queestion

Escribe una función llamada `getFirstLetters` que toma una matriz de cadenas
 * y devuelve otra matriz de cadenas con solo la primera letra
 *
 * Sugerencia: es posible que desee invocar la función `reverseString` que escribió anteriormente
 * de la queestion anterior

*/



function getFirstLetters (array1){
	console.log(array1)
	let nuuevoArray = [""]
	for(let i = 0; i < array1.length; i++){
		let agregar = array1[i][0]
		//console.log(agregar)
		nuuevoArray += agregar 
	}
		return nuuevoArray
}







//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
let outputArray1 = getFirstLetters(['wow', 'milk', 'howdy'])
console.assert( getFirstLetters(outputArray1[0] === 'w'))
console.assert( getFirstLetters(outputArray1[1] === 'm'))
console.assert( getFirstLetters(outputArray1[2] === 'h'))


let outputArray2 = getFirstLetters(['kayak', 'chair', 'jacket', 'nice!'])
console.assert( getFirstLetters(outputArray2[0] === 'k'))
console.assert( getFirstLetters(outputArray2[1] === 'c'))
console.assert( getFirstLetters(outputArray2[2] === 'j'))
console.assert( getFirstLetters(outputArray2[3] === 'n'))