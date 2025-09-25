type P = Promise<number>;

const addTwoPromises = async function (promise1: P, promise2: P): P {
  return (await promise1) + (await promise2);
};
