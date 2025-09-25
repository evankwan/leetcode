type ArrayValue = any | Array<ArrayValue>;

export default function flatten(array: Array<ArrayValue>): Array<any> {
  let acc: any[] = [];
  // loop through the value
  array.forEach((value) => {
    console.log(value, !Array.isArray(value));
    // if value is NOT an array, return it
    if (!Array.isArray(value)) {
      acc.push(value);
      return;
    }

    // if the value is an array, spread the attributes
    acc.push(...flatten(value));
  });

  return acc;
}
