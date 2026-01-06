function wordPattern(pattern: string, s: string): boolean {
	// convert the string into an array
	const sentence = s.split(" ");
	// if the pattern length is greater than the sentence length, return false
	if (sentence.length !== pattern.length) return false;

	// loop through the string (as an array)
	let isValid = true;
	const map = new Map<string, string>();
	const set = new Set<string>();
	for (let i = 0; i < sentence.length; i++) {
		const characterIndex = i % pattern.length;
		const currentCharacter = pattern.charAt(characterIndex);
		const currentWord = sentence[i];
		// if the current pattern letter does not have a value
		if (!map.has(currentCharacter) && !set.has(currentWord)) {
			// assign it and continue
			map.set(currentCharacter, currentWord);
			set.add(currentWord);
			continue;
		}
		// else check if the current pattern letter is equal to the value in the string
		const isCorrect = map.get(currentCharacter) === currentWord;
		// if it is
		if (isCorrect) {
			continue;
		} else {
			// if it is not
			isValid = false;
			break;
		}
	}
	// return the value
	return isValid;
}
