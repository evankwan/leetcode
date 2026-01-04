function addDigits(num: number): number {
	const string = num.toString();
	let sum = 0;
	for (let i = 0; i < string.length; i++) {
		sum += Number(string.charAt(i));
	}
	if (sum > 9) return addDigits(sum);

	return sum;
}
