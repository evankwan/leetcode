function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) return false;
	let counts = new Array(26).fill(0);
	const a = "a".charCodeAt(0);
	for (let i = 0; i < s.length; i++) {
		counts[s.charCodeAt(i) - a]++;
		counts[t.charCodeAt(i) - a]--;
	}
	return counts.every((c) => c === 0);
}
