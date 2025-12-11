function hammingWeight(n: number): number {
	let oneBitCount = 0;
	let remainder = n;
	while (remainder > 0) {
		oneBitCount += remainder % 2;
		remainder = Math.floor(remainder / 2);
	}
	return oneBitCount;
}
