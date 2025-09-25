function lengthOfLongestSubstring(s: string): number {
  let longestString = "";
  if (s.length === 0) {
    return 0;
  }
  for (let i = 0; i < s.length; i++) {
    let currentSubstring = "";
    for (let j = i; j < s.length; j++) {
      if (currentSubstring.includes(s[j])) {
        i += currentSubstring.indexOf(s[j]);
        break;
      }
      currentSubstring += s[j];

      if (currentSubstring.length > longestString.length) {
        longestString = currentSubstring;
      }
    }
    if (longestString.length > s.length - i) {
      break;
    }
  }
  return longestString.length;
}
