type Digit = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
function letterCombinations(digits: string): string[] {
	// create a map of each number to letter possibilities
	const map = {
		"2": ["a", "b", "c"],
		"3": ["d", "e", "f"],
		"4": ["g", "h", "i"],
		"5": ["j", "k", "l"],
		"6": ["m", "n", "o"],
		"7": ["p", "q", "r", "s"],
		"8": ["t", "u", "v"],
		"9": ["w", "x", "y", "z"],
	};
	// init an answer array
	let ans: string[] = [];
	// split the digits string into an array
	const digitsArray: Digit[] = digits.split("") as Digit[];
	// calculate the total number of answers
	let totalAnswers = 0;
	for (let i = 0; i < digitsArray.length; i++) {
		if (totalAnswers === 0) {
			totalAnswers = map[digitsArray[i]].length;
		} else {
			totalAnswers *= map[digitsArray[i]].length;
		}
	}
	// create pointers for all the digits
	let pointers = new Array(digitsArray.length).fill(0);
	// loop until we're at total answers
	outer: for (let i = 0; i < totalAnswers; i++) {
		// build the string by using the pointers
		let string = "";
		pointers.forEach((pointer, index) => {
			string += map[digitsArray[index]][pointer];
		});
		ans.push(string);
		// increment the right-most pointer until it's at the max, then increment the next right-most and decrement the right-most
		// init a carryover
		let carry = 1;
		// loop through the pointers backwards
		pointerLoop: for (let i = pointers.length - 1; i >= 0; i--) {
			// if the carry is 0, break the loop
			if (carry === 0) break pointerLoop;
			// increment the pointer
			pointers[i] += carry;
			// decrement the carry
			carry--;
			// if the pointer is equal to the length of the array of posisble characters, set to 0 and increase the carry
			if (pointers[i] >= map[digitsArray[i]].length) {
				pointers[i] = 0;
				carry++;
			}
		}
	}
	return ans;
}
