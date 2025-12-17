function findErrorNums(nums: number[]): number[] {
	// init a dupe and missing var
	let dupe: number, missing: number | undefined;
	// write a function to swap values in place for the number array
	function swapValues(nums: number[], i: number): void {
		let temp = nums[nums[i] - 1];
		nums[nums[i] - 1] = nums[i];
		nums[i] = temp;
	}

	// loop through the array
	for (let i = 0; i < nums.length; i++) {
		// expected value is always i + 1
		const expected = i + 1;
		// init a temp var to hold the number being switched
		let temp: number;
		inner: while (nums[i] !== expected) {
			// set the temp var
			temp = nums[i];
			// if the temp is the missing number, the missing number isn't actually missing
			if (temp === missing!) missing = undefined;
			// swap the values in the array
			swapValues(nums, i);
			// if the number is the same as the one that it switched with
			if (nums[i] === temp) {
				// the temp is the dupe
				dupe = temp;
				// the expected is assumed missing for now
				missing = expected;
				// break the while loop and continue the for loop
				break inner;
			}
		}
	}
	// return the dupe and missing
	return [dupe!, missing!];
}
