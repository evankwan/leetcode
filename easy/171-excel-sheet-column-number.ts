function titleToNumber(columnTitle: string): number {
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const base = 26;
	const array = columnTitle.split("").reverse();
	const base26 = array.map((letter) => alphabet.indexOf(letter) + 1);
	const base10 = base26.map((num, index) => {
		return num * base ** index;
	});
	let res = 0;
	for (let i = 0; i < base10.length; i++) {
		res += base10[i];
	}
	return res;
}
