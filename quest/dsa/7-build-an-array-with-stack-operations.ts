function buildArray(target: number[], n: number): string[] {
	const targetSet = new Set(target);
	const array = [];
	for (let i = 0; i < target[target.length - 1]; i++) {
		const oneIndex = i + 1;
		if (targetSet.has(oneIndex)) {
			array.push("Push");
			continue;
		}
		if (!targetSet.has(oneIndex)) {
			array.push("Push", "Pop");
			continue;
		}
	}
	return array;
}
