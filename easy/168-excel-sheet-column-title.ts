// need to convert the number into base 26
function convertToTitle(columnNumber: number): string {
	const base = 26;
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	// if the number is under or 26, short circuit
	if (columnNumber <= base) {
		return alphabet[columnNumber - 1]; // 0 index correction
	}
	// convert the number larger than 26 to a base 26
	// to convert it's divide the number by the base, add the remainder to the array
	// set the remainder to the Math.floor
	let string = "",
		remainder = columnNumber; // 52
	while (remainder > 0) {
		// 52
		const add = (remainder - 1) % base; // 26
		string = `${alphabet[add]}${string}`;
		remainder = Math.floor((remainder - add) / base);
	}
	return string;
}
