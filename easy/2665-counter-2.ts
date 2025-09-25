type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let num = init;
  return {
    increment: function () {
      return ++num;
    },
    reset: function () {
      return (num = init);
    },
    decrement: function () {
      return --num;
    },
  } as Counter;
}

export {};
