const base2 = 2;
const base10 = 10;
const bit32 = 32;

type Options = {
	reverse: boolean;
};

function convertToBase2Reversed(n: number): number[] {
	let res: number[] = [];
	let remainder = n;
	while (remainder > 0 || res.length < bit32) {
		if (remainder > 0) {
			const add = remainder % base2;
			res.push(add);
			remainder = Math.floor(remainder / base2);
		} else {
			res.push(0);
		}
	}

	return res;
}

function convertToBase10(n: number[]): number {
	let total = 0;
	for (let i = 0; i < n.length; i++) {
		const add = n[i] * base2 ** (n.length - (i + 1));
		total += add;
	}
	return total;
}

function reverseBits(n: number): number {
	const reversedBase2: number[] = convertToBase2Reversed(n);
	return convertToBase10(reversedBase2);
}
