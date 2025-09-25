export default function selectionSort(arr: Array<number>): Array<number> {
  const array = [...arr];
  // if arr ha s0 or 1 elements, just return to short circuit everything
  if (array.length <= 1) return array;

  // loop through each index
  for (let i = 0; i < array.length; i++) {
    // set the minIndex to the current index
    let minIndex = i;
    // find if there is any minimum
    for (let j = i + 1; j < array.length; j++) {
      // if the item at index j is greater than or equal to item at index minIndex, ignore it
      if (array[j] >= array[minIndex]) continue;

      // if the item at index j is less than item at index i, set the minIndex to j
      minIndex = j;
    }

    // if minIndex is different from i, swap the values, otherwise move onto next index
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}
