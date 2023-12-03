// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
// 	Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
	debugger

	const dictionary = {};

	for (const ch of str) {
		if (!dictionary[ch]) {
			dictionary[ch] = 1;
		} else {
			dictionary[ch]++;
		}
	}

	let count = dictionary['o'] > 0 ? dictionary['o'] : 0 + dictionary['O'] > 0 ? dictionary['O'] : 0;

	return dictionary['x'] === count || dictionary['x'] === count;
}

console.log(XO('xxOo'));
