class MyQueue {
	private queue: number[];

	constructor() {
		this.queue = [];
	}

	push(x: number): void {
		this.queue.push(x);
	}

	pop(): number {
		return this.queue.shift() as number;
	}

	peek(): number {
		return this.queue[0];
	}

	empty(): boolean {
		return this.queue.length === 0;
	}
}
