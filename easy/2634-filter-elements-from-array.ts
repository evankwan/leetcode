type Fn = (n: number, i: number) => any;

const filter = function (arr: number[], fn: Fn): number[] {
  const array: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i)) {
      continue;
    }
    array.push(arr[i]);
  }
  return array;
};
