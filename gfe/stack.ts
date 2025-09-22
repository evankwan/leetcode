export default class Stack<T> {
	constructor() {
	  this.value = [];
	}
  
	value: T[];

	push(item: T): number {
	  return this.value.push(item);
	}

	pop(): T | undefined {
	  return this.value.pop();
	}
  
	isEmpty(): boolean {
	  return this.value.length === 0;
	}
	
	peek(): T | undefined {
	  return this.value[this.value.length - 1];
	}
	
	length(): number {
	  return this.value.length;
	}
}
  