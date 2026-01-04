function isPowerOfTwo(n: number): boolean {
	let isValid = false;
	for (let i = 0; i < n; i++) {
		const res = 2 ** i;
		if (n === res) return true;
		if (n < res) return false;
	}
	return isValid;
}
