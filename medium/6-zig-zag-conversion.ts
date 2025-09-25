function convert(s: string, numRows: number): string {
  if (s.length <= numRows || numRows === 1) {
    return s;
  }
  let matrix: string[] = [];

  const pivot: number = numRows * 2 - 2; // everything repeats except for the top and bottom
  const halfPivot: number = pivot / 2; // need the midpoint so we can calc the distance from i to the midpoint of the cycle
  for (let i: number = 0; i < s.length; i++) {
    let level: number = i % pivot;
    if (level > halfPivot) {
      level = halfPivot - (i % halfPivot);
    }
    if (!matrix[level]) {
      matrix[level] = "";
    }

    matrix[level] += s[i];
  }

  let finalString: string = "";
  for (let i = 0; i < matrix.length; i++) {
    finalString += matrix[i];
  }
  return finalString;
}
