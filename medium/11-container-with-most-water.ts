function maxArea(height: number[]): number {
  let low = 0;
  let high = height.length - 1;
  let max = 0;
  while (low <= high) {
    const distance = Math.min(height[low], height[high]);
    const breadth = high - low;
    const area = distance * breadth;

    max = Math.max(max, area);

    if (height[low] < height[high]) low++;
    else high--;
  }
  return max;
}
