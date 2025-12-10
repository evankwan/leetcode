function majorityElement(nums: number[]): number {
	if (nums.length === 1) return nums[0];
	const map: Map<number, number> = new Map();
	let ans: number;
	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
		if ((map.get(nums[i]) as number) > nums.length / 2) {
			ans = nums[i];
			break;
		}
	}
	return ans!;
}
