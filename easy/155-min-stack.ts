class MinStack {
	private stack: number[];
	private min: number[];

	constructor() {
		this.stack = [];
		this.min = [];
	}

	push(val: number): void {
		this.stack.unshift(val);
		if (this.min.length === 0 || this.min[0] >= val) {
			this.min.unshift(val);
		}
	}

	pop(): void {
		const removed = this.stack.shift();
		if (removed === this.min[0]) {
			this.min.shift();
		}
	}

	top(): number {
		return this.stack[0];
	}

	getMin(): number {
		return this.min[0];
	}
}
