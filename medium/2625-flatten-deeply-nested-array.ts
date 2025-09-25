type MultiDimensionalArray = (number | MultiDimensionalArray)[];

let flat = function (
  arr: MultiDimensionalArray,
  n: number,
): MultiDimensionalArray {
  let array: (number | MultiDimensionalArray)[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i]) || n === 0) {
      array.push(arr[i]);
      continue;
    }

    array.push(...flat(arr[i] as MultiDimensionalArray, n - 1));
  }
  return array;
};
