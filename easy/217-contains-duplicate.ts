function containsDuplicate(nums: number[]): boolean {
	// convert nums into a set
	const set = new Set(nums);
	// return a comparison of the length
	return set.size !== nums.length;
}
