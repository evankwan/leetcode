function missingNumber(nums: number[]): number {
	let expected = 0,
		sum = 0;
	for (let i = 0; i < nums.length; i++) {
		expected += i + 1;
		sum += nums[i];
	}
	return expected - sum;
}
