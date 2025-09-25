function addBinary(a: string, b: string): string {
  let newString: string = "";
  let carry: number = 0;
  const longerString = a.length > b.length ? a : b;
  for (let i = 0; i < longerString.length; i++) {
    const numA = Number(a[a.length - 1 - i] ?? 0);
    const numB = Number(b[b.length - 1 - i] ?? 0);
    const sum = carry + numA + numB;
    carry = sum > 1 ? 1 : 0;
    newString = (sum % 2 === 1 ? "1" : "0") + newString;
  }
  return carry ? "1" + newString : newString;
}
