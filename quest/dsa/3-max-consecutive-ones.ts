function findMaxConsecutiveOnes(nums: number[]): number {
	// short circuit
	if (nums.length === 0) return 0;

	let max = 0,
		current = 0;
	for (let i = 0; i < nums.length; i++) {
		// track the current streak
		if (nums[i] === 1) {
			current++;
			// if the current streak is longer than max, set the max
			if (current > max) {
				max = current;
			}
			continue;
		}

		// if the streak is broken and the max is greater than the number of remaining elements, break the loop
		current = 0;
		if (max > nums.length - 1 - i) {
			break;
		}
	}
	return max;
}
