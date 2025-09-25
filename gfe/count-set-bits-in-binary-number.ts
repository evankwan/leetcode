declare global {
  interface Number {
    toBinary(): string;
  }
}

Number.prototype.toBinary = function () {
  let n = Math.floor(this as number);
  if (n === 0) return "0";
  let result = "";
  while (n > 0) {
    result = (n % 2) + result;
    n = Math.floor(n / 2);
  }
  return result;
};

export default function countOnesInBinary(num: number): number {
  const binary = num.toBinary();
  const replaced = binary.replaceAll("0", "");
  return replaced.length;
}
