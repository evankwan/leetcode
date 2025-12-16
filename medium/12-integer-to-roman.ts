function intToRoman(num: number): string {
	const units = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	const numerals = [
		"M",
		"CM",
		"D",
		"CD",
		"C",
		"XC",
		"L",
		"XL",
		"X",
		"IX",
		"V",
		"IV",
		"I",
	];
	let result = "";
	for (let i = 0; i < units.length; i++) {
		while (num >= units[i]) {
			result += numerals[i];
			num -= units[i];
		}
	}
	return result;
}
