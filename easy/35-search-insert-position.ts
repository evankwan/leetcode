function searchInsert(nums: number[], target: number): number {
    const index = nums.findIndex(num => num >= target)
    return index >= 0 ? index : nums.length
};