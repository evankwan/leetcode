class MyStack {
	stack: number[];

	constructor() {
		this.stack = [];
	}

	push(x: number): void {
		this.stack.unshift(x);
	}

	pop(): number {
		return this.stack.shift() as number;
	}

	top(): number {
		return this.stack[0];
	}

	empty(): boolean {
		return this.stack.length === 0;
	}
}
