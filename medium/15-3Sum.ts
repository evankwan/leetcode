function threeSum(nums: number[]): number[][] {
	const sorted = nums.toSorted((a, b) => a - b);
	let ans: number[][] = [];
	for (let i = 0; i < sorted.length; i++) {
		if (i > 0 && sorted[i] === sorted[i - 1]) continue;
		const target = -sorted[i];
		let left = i + 1,
			right = sorted.length - 1;
		while (left < right) {
			const currentSum = sorted[left] + sorted[right];
			if (currentSum === target) {
				ans.push([sorted[i], sorted[left], sorted[right]]);
				while (left < right && sorted[left] === sorted[left + 1]) left++;
				while (left < right && sorted[right] === sorted[right - 1]) right--;
				left++;
				right--;
			} else if (currentSum < target) {
				left++;
			} else {
				right--;
			}
		}
	}
	return ans;
}
