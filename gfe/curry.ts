export default function curry(func: Function): Function {
	// short circuit
	// is there a better way to do this? just allow func to run and handle it there?
	if (func.length === 0) {
		return function () {
			return func.call(this);
		};
	}
	// determine how many params are needed
	const paramsNeeded = func.length;
	let argsProvided: number[] = [];
	// return a function
	const rec = function (val: number) {
		if (!val) return rec.bind(this);
		// add the val to an array of args
		argsProvided.push(val);
		// if the array is not enough, return another curry call
		if (argsProvided.length !== paramsNeeded) {
			return rec.bind(this);
		}
		const argsUsed = [...argsProvided];
		argsProvided = [];
		// else return the res of the func
		return func.call(this, ...argsUsed);
	};
	return rec;
}
