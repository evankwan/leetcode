type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

const chunk = function (arr: Obj[], size: number): Obj[][] {
  const chunkedArray: Obj[][] = [];
  for (let i = 0; i < arr.length; i++) {
    const lastChunk = chunkedArray[chunkedArray.length - 1];
    if (lastChunk?.length < size) {
      lastChunk.push(arr[i]);
    } else {
      chunkedArray.push([arr[i]]);
    }
  }
  return chunkedArray;
};
