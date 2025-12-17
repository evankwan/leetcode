function shuffle(nums: number[], n: number): number[] {
	const shuffled = [];
	for (let i = 0; i < Math.ceil(nums.length / 2); i++) {
		shuffled.push(nums[i], nums[i + n]);
	}
	return shuffled;
}
