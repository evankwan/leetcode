function getRow(rowIndex: number): number[] {
	if (rowIndex === 0) return [1];
	const pascalsTriangle: number[][] = [];
	for (let i = 0; i < rowIndex + 1; i++) {
		let row: number[] = [];
		while (row.length < i + 1) {
			let num = 1;
			if (row.length > 0 && row.length !== i) {
				num =
					pascalsTriangle[i - 1][row.length] +
					pascalsTriangle[i - 1][row.length - 1];
			}
			row.push(num);
		}
		pascalsTriangle.push(row);
	}
	return pascalsTriangle[rowIndex];
}
