function removeDuplicates(nums: number[]): number {
  const uniqueNums: Set<number> = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (uniqueNums.has(nums[i])) {
      nums.splice(i, 1);
      i--;
      continue;
    }

    uniqueNums.add(nums[i]);
  }

  return nums.length;
}
