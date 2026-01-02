function finalPrices(prices: number[]): number[] {
	// 2 pointer
	// init an answers array
	const answer = [];
	// loop through the prices
	outer: for (let i = 0; i < prices.length; i++) {
		let finalPrice = prices[i];
		// for that index, loop through the remaining prices
		inner: for (let j = i + 1; j < prices.length; j++) {
			// if the price is less than the outer current price
			if (prices[j] <= prices[i]) {
				// push the price[i] - price[j] into the answer array
				finalPrice = prices[i] - prices[j];
				break inner;
			}
		}
		answer.push(finalPrice);
	}
	// return the answer array
	return answer;
}
