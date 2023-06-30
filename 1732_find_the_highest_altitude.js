/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
	let max = 0
	let sum = 0
	let i = 0
	while (i < gain.length) {
		sum += gain[i]
		if (sum > max) max = sum
		i++
	}
	return max
};
