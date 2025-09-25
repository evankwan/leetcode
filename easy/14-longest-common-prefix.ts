function longestCommonPrefix(strs: string[]): string {
  let string = "";
  if (strs.length === 0) {
    return string;
  }
  const firstString = strs[0];
  for (let i = 0; i < firstString.length; i++) {
    const newString = `${string}${firstString[i]}`;
    if (strs.every((str) => str.startsWith(newString))) {
      string = newString;
      continue;
    }
    return string;
  }
  return string;
}
