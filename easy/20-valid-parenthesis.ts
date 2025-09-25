function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  const correspondingMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const isOpenBracket = (c: string) => c === "(" || c === "{" || c === "[";
  let isTrue = true;
  const score: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (isOpenBracket(char)) {
      score.push(char);
    } else if (score[score.length - 1] !== correspondingMap[char]) {
      isTrue = false;
      break;
    } else if (score[score.length - 1] === correspondingMap[char]) {
      score.pop();
    }
    if (i === s.length - 1 && score.length > 0) {
      isTrue = false;
      break;
    }
    continue;
  }
  return isTrue;
}
