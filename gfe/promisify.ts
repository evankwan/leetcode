export default function promisify<T>(
	func: (...args: any[]) => void
): (this: any, ...args: any[]) => Promise<T> {
	// return a function that taks the arguments
	return function (...args) {
		// create a promise
		return new Promise<T>((res, rej) => {
			// call the function with the args and the cb function
			func.call(this, ...args, function (err: Error | null, val: T): void {
				if (err) {
					rej(err);
					// test
				} else {
					res(val);
				}
			});
		});
	};
}
