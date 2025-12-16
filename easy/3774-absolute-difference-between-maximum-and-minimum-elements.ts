function absDifference(nums: number[], k: number): number {
	const sorted = nums.toSorted((a, b) => (a < b ? 1 : -1));
	let largestSum = 0,
		smallestSum = 0;
	for (let i = 0; i < sorted.length; i++) {
		if (i < k) {
			largestSum += sorted[i];
		}
		if (i >= sorted.length - k) {
			smallestSum += sorted[i];
		}
	}
	return largestSum - smallestSum; // 9 - 4
}
