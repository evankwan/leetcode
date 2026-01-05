function threeSumClosest(nums: number[], target: number): number {
	const sorted = nums.toSorted((a, b) => a - b);
	let closest;
	for (let i = 0; i < sorted.length; i++) {
		if (i > 0 && sorted[i] === sorted[i - 1]) continue;
		const fixed = sorted[i];
		let left = i + 1,
			right = sorted.length - 1;
		while (left < right) {
			const currentSum = sorted[left] + sorted[right] + fixed;
			const dist = Math.abs(currentSum - target);
			if (dist < Math.abs(closest - target) || closest === undefined) {
				closest = currentSum;
			}
			if (currentSum < target) {
				left++;
			} else {
				right--;
			}
		}
	}
	return closest;
}
