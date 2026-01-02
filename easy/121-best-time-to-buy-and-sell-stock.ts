function maxProfit(prices: number[]): number {
	let min = prices[0],
		maxProfit = 0;

	for (let i = 0; i < prices.length; i++) {
		const profit = prices[i] - min;
		if (profit > maxProfit) {
			maxProfit = profit;
			continue;
		}
		if (prices[i] < min) {
			min = prices[i];
			continue;
		}
	}

	return maxProfit;
}
