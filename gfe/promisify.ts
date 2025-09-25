export default function promisify<T>(
    func: (...args: any[]) => void,
  ): (this: any, ...args: any[]) => Promise<T> {
    // return a function that taks the arguments
    return function(...args) {
      // create a promise
      return new Promise((res, rej) => {
        const cb = function (err: Error, val: any): any {
          if (err) {
            rej(err);
          } else {
            res(val);
          }
        };
        // call the function with the args and the cb function
        func.call(this, ...args, cb);
      });
    };
  }
  