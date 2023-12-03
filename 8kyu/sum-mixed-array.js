// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
// 	Return your answer as a number.

function sumMix(x){
	return  x.reduce((sum, n) => sum + (+n), 0);
}

sumMix([9, 3, '7', '3'])
