function isIsomorphic(s: string, t: string): boolean {
	const map: Map<string, string> = new Map();
	const set: Set<string> = new Set();
	for (let i = 0; i < s.length; i++) {
		if (!map.has(s[i]) && !set.has(t[i])) {
			map.set(s[i], t[i]);
			set.add(t[i]);
			continue;
		}

		if (map.get(s[i]) === t[i]) {
			continue;
		}

		return false;
	}
	return true;
}
