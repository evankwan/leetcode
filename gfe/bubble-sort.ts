export default function bubbleSort(arr: Array<number>): Array<number> {
  // short circuit for arrays with 1 or less items
  if (arr.length <= 1) return arr;

  // copy the array so we don't operate on the existing
  const array = [...arr];

  // loop through the array array.length - 1 times
  for (let i = 0; i <= array.length - 1; i++) {
    // init an early exit bool
    let swapped = false;
    // loop through the array to compare
    for (let j = 0; j < array.length - i - 1; j++) {
      // compare the current index and the next index
      if (array[j] > array[j + 1]) {
        // if the left is greater, swap positions
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  // return the result
  return array;
}
