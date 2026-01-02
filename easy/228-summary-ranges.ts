function summaryRanges(nums: number[]): string[] {
	if (nums.length === 1) {
		return [`${nums[0]}`];
	}
	function generateRange(startIndex: number, end: number): string {
		return end === nums[startIndex]
			? `${nums[startIndex]}`
			: `${nums[startIndex]}->${end}`;
	}
	let ranges: string[] = [];
	let startIndex = 0;
	for (let i = 1; i < nums.length; i++) {
		const isTheLast = i === nums.length - 1;
		const isCorrectSequence = nums[i] === nums[startIndex] + (i - startIndex);
		if (isCorrectSequence && isTheLast) {
			ranges.push(generateRange(startIndex, nums[i]));
			break;
		} else if (isCorrectSequence && !isTheLast) {
			continue;
		}
		ranges.push(generateRange(startIndex, nums[i - 1]));
		startIndex = i;
		if (isTheLast) {
			ranges.push(`${nums[i]}`);
			break;
		}
	}
	return ranges;
}
