function findDisappearedNumbers(nums: number[]): number[] {
	// init a missing array
	let missing = [];
	let numsSet = new Set<number>(nums);
	for (let i = 0; i < nums.length; i++) {
		const expected = i + 1;
		if (!numsSet.has(expected)) {
			missing.push(expected);
		}
	}
	// return the missing array
	return missing;
}
