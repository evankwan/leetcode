function smallerNumbersThanCurrent(nums: number[]): number[] {
	// sort
	const sorted = nums.toSorted((a, b) => (a > b ? 1 : -1));
	// create a map
	const results = new Map<number, number>();
	// map through the unsorted array
	return nums.map((num): number => {
		// check the map
		if (results.has(num)) return results.get(num) as number;
		// find the first index in the sorted array
		const firstIndex = sorted.findIndex((val) => val === num);
		// add to the map
		results.set(num, firstIndex);
		// return the index
		return firstIndex;
	});
}
