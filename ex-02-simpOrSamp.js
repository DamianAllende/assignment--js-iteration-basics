
/**
 * simpOrSamp()
 *
 * Write a function called `simpOrSamp` that takes an array of strings as input:
 *   If an element in the array is less than 6 characters, append 'Sampson': e.g. "Homer Sampson"
 *   If an element in the array is 6 characters or longer, append 'Simpson': 'Jessica Simpson'
 *
*/

function  simpOrSamp (cadena) {
let result = []
	for(let i = 0; i < cadena.length; i++){
	
		let contador = cadena[i].length
		if (contador < 6) {
			let name = cadena[i] + ' Sampson' 
			//console.log(name)
			result.push(name)


		}else if (contador >= 6) {
			let name2 = cadena[i] + ' Simpson' 
			//console.log(name2)
			result.push(name2)

		}


		
	}

	return result
	
}






//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]

var modifiedNamesList = simpOrSamp(simpList)

console.assert( modifiedNamesList[1] === 'OJ Sampson' )
console.assert( modifiedNamesList[2] === 'Marge Sampson' )
console.assert( modifiedNamesList[5] === 'Maggie Simpson' )
console.assert( modifiedNamesList[0] !== 'Homer Simpson' )
