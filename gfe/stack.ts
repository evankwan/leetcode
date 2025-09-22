export default class Stack<T> {
	constructor() {
	  this.value = [];
	}
  
	value: T[];
  
	/**
	 * Pushes an item onto the top of the stack.
	 */
	push(item: T): number {
	  return this.value.push(item);
	}
  
	/**
	 * Remove an item at the top of the stack.
	 */
	pop(): T | undefined {
	  return this.value.pop();
	}
  
	/**
	 * Determines if the stack is empty.
	 */
	isEmpty(): boolean {
	  return this.value.length === 0;
	}
  
	/**
	 * Returns the item at the top of the stack without removing it from the stack.
	 */
	peek(): T | undefined {
	  return this.value[this.value.length - 1];
	}
  
	/**
	 * Returns the number of items in the stack.
	 */
	length(): number {
	  return this.value.length;
	}
}
  