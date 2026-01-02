function dailyTemperatures(temperatures: number[]): number[] {
	// init a mapping of temperatures to indexes that satisfy warmer
	const map = new Map<number, number>();
	// init an answer array
	const answer = [];
	// outer loop through the temperatures
	outer: for (let i = 0; i < temperatures.length; i++) {
		// if the current temp already exists in the map and the indexing is greater than the current index, push the diff into the answer array
		if (map.has(temperatures[i])) {
			if (map.get(temperatures[i]) > i) {
				answer.push(map.get(temperatures[i]) - i);
				continue outer;
			}
			map.delete(temperatures[i]);
		}
		// if the current temp already exists in the map and the index is less than or equal to the current index, remove the index
		// record the current index
		let index = 0;
		// inner loop through the remaining temperatures
		inner: for (let j = i + 1; j < temperatures.length; j++) {
			// if the temperature is greater than the current, record that index difference
			if (temperatures[j] > temperatures[i]) {
				index = j - i;
				map.set(temperatures[i], j);
				break inner;
			}
		}
		// push the recorded temp into the answer array
		answer.push(index);
	}
	// return the answer array
	return answer;
}
