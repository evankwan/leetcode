function add(a: number, b: number): number {
	return a + b;
}
function subtract(a: number, b: number): number {
	return a - b;
}
function multiply(a: number, b: number): number {
	return a * b;
}
function divide(a: number, b: number): number {
	return a / b;
}
const STRATEGY = {
	"+": add,
	"-": subtract,
	"*": multiply,
	"/": divide,
};
function evalRPN(tokens: string[]): number {
	// create a stack
	const stack: number[] = [];
	// hardcode the operators
	const operators = ["+", "-", "/", "*"];
	tokens.forEach((token) => {
		// if it's an operator
		if (operators.includes(token)) {
			// remvoe the top two items in the stack
			const second = stack.pop();
			const first = stack.pop();
			// get the correct math fn
			const evaluate = STRATEGY[token];
			// push the result and truncate towards 0
			stack.push(Math.trunc(evaluate(first, second)));
			return;
		}
		// if it's not an operator, it's a number
		stack.push(Number(token));
	});
	// return the top of the stack
	return stack[0];
}
