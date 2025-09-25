function reverse(x: number): number {
  const numberString = String(x);
  let isNegative = numberString[0] === "-";
  let reversed = "";
  for (let i = numberString.length - 1; i >= 0; i--) {
    if (!Number.isInteger(Number(numberString[i]))) {
      continue;
    }
    reversed += numberString[i];
  }
  const posLimit = String(2 ** 31 - 1);
  if (reversed.length >= posLimit.length) {
    const negLimit = String(-(2 ** 31 - 1));
    const isBelowLimit = reversed < negLimit;
    const isAboveLimit = reversed > posLimit;
    if (isBelowLimit || isAboveLimit) {
      return 0;
    }
  }
  const reversedNum = isNegative ? 0 - Number(reversed) : Number(reversed);
  return reversedNum;
}
