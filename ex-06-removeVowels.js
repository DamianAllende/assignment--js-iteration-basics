/**
 * removeVowels()
 *
 * Write a function called `removeVowels()`.
 * It should accept a string as input,
 * and it should return a new string without the vowels.
 *
*/
/*
function removeVowels (string1){
const vocales = "aeiouAEIOU"
let nuevoString = ""
	for (let i = 0; i < string1.length; i ++ ){
			//console.log(string1[i])
			let insert = string1[i]

		for (let index = 0; index < vocales.length; index++){
			//console.log(vocales[index])

			if (insert !== vocales[index]) {
				//console.log(insert)
				nuevoString += insert
				
			}

			//console.log(insert)
		}
			
	
	}
	
console.log(nuevoString)


}
*/






//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( removeVowels('milk') === 'mlk' );
console.assert( removeVowels('christmas') === 'chrstms' )
console.assert( removeVowels('moo shoo pork') === 'm sh prk' )

//should handle capital letters
console.assert( removeVowels('Out of Order') === 't f rdr' )
console.assert( removeVowels('Estados Unidos') === 'stds nds' )
