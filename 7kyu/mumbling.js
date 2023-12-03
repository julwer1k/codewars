/**
 *
 * @param s
 */

function accum(s) {
	let result = [];

	for (let i = 0; i < s.length; i++) {
		if (result.length === 0) {
			result.push(s[i].toUpperCase());
		} else {
			const count = i;
			let repeat = s[i].repeat(count);
			result.push(s[i].toUpperCase() + repeat.toLowerCase());
		}
	}

	return result.join('-');
}

accum('ZpglnRxqenU')
