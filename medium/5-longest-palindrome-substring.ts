function isPalidrome(s: string) {
  let isTrue = true;
  for (let i = 0; i <= s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      isTrue = false;
      break;
    }
  }
  return isTrue;
}

function longestPalindrome(s: string): string {
  let longestString = "";
  for (let i = 0; i < s.length; i++) {
    let currentSubstring = "";
    for (let j = i; j < s.length; j++) {
      currentSubstring += s[j];

      if (
        currentSubstring.length > longestString.length &&
        isPalidrome(currentSubstring)
      ) {
        longestString = currentSubstring;
      }
    }
    if (longestString.length >= s.length - i) {
      break;
    }
  }
  return longestString;
}
