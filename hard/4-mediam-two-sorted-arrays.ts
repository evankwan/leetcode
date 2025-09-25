// brute force method
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const joined = nums1.concat(nums2);
  joined.sort((a, b) => (a > b ? 1 : -1));
  if (joined.length % 2 === 0) {
    return (joined[joined.length / 2 - 1] + joined[joined.length / 2]) / 2;
  }
  return joined[Math.ceil(joined.length / 2) - 1];
}

// recursive 2 pointer
function findMedianSortedArrays2Pointer(
  nums1: number[],
  nums2: number[],
): number {
  const totalLength: number = nums1.length + nums2.length;
  const midPoint: number = totalLength / 2 - 1;
  const adjustedMidPoint: number =
    totalLength % 2 === 0 ? midPoint + 0.5 : Math.ceil(midPoint);
  let sorted: number[] = [];
  const check = (index1: number, index2: number): number => {
    if (sorted.length - 1 === adjustedMidPoint) {
      return sorted[adjustedMidPoint];
    } else if (sorted.length - 1 > adjustedMidPoint) {
      return (sorted[Math.ceil(adjustedMidPoint)] + sorted[midPoint]) / 2;
    }
    const num1 = nums1[index1];
    const num2 = nums2[index2];
    if ((!Number.isInteger(num2) && Number.isInteger(num1)) || num1 <= num2) {
      sorted.push(num1);
      return check(index1 + 1, index2);
    }
    sorted.push(num2);
    return check(index1, index2 + 1);
  };
  return check(0, 0);
}
