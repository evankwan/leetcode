function _isHappy(n: number, memo: Set<string>): boolean {
	const string = String(n);
	if (memo.has(string)) {
		return false;
	}
	memo.add(string);
	const numberArray = string.split("");
	let newNum = 0;
	numberArray.forEach((num: string) => {
		newNum += Number(num) ** 2;
	});
	return newNum === 1 ? true : _isHappy(newNum, memo);
}

function isHappy(n: number): boolean {
	const memo: Set<string> = new Set();
	return _isHappy(n, memo);
}
