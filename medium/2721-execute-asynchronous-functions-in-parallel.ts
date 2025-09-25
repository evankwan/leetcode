type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise(function (res, rej) {
    const results: T[] = [];
    let completed = 0;

    if (functions.length === 0) {
      res(results);
    }

    functions.forEach(function (fn, i) {
      fn()
        .then(function (result) {
          results[i] = result;
          completed++;

          if (completed === functions.length) {
            res(results);
          }
        })
        .catch(function (error) {
          rej(error);
        });
    });
  });
}

export {};
