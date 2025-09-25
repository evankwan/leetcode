function strStr1(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

// and a hacky manual solution
function findSubstring(
  haystack: (string | undefined)[],
  needle: string,
): number {
  // if it does exist, find the index of the first character of the substring in the haystack
  const firstIndex = haystack.findIndex((c) => c === needle[0]);

  // check if the substring exists at that index
  const substring = haystack.slice(firstIndex, firstIndex + needle.length);

  // if it does return
  if (substring.join("") === needle) {
    return firstIndex;
  }

  // if it does not, replace the first char with undefined, move onto the next index of the first char and so on
  haystack[firstIndex] = undefined;
  return findSubstring(haystack, needle);
}

function strStr2(haystack: string, needle: string): number {
  // look for the substring
  // if it does not exist, return
  if (!haystack.includes(needle)) {
    return -1;
  }
  return findSubstring(Array.from(haystack), needle);
}
