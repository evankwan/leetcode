function singleNumber(nums: number[]): number {
	// init a set to contain all numbers with only 1
	const unique = new Set();
	// init a map to track counters
	const counterMap = new Map();
	// loop through the array of numbers
	nums.forEach((num) => {
		// add the number to the map with a counter of 1
		if (!counterMap.has(num)) {
			counterMap.set(num, 1);
			// add the number to the set
			unique.add(num);
		} else {
			// if the number exists in the map, increment the counter and remove from the set
			counterMap.set(num, counterMap.get(num) + 1);
			unique.delete(num);
		}
	});
	// return the first number in the set
	return unique.values().next().value as number;
}
