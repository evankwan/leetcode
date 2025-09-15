interface Array<T> {
myReduce<U>(
    callbackFn: (
    previousValue: U,
    currentValue: T,
    currentIndex: number,
    array: T[],
    ) => U,
    initialValue?: U,
): U;
}

Array.prototype.myReduce = function (callbackFn, initialValue) {
    if (initialValue === undefined && this.length === 0) {
        throw new TypeError("Reduce of empty array with no initial value")
    }
    let accumulator,
        startIndex
    
    if (initialValue !== undefined) {
        accumulator = initialValue
        startIndex = 0
    } else {
        accumulator = this[0]
        startIndex = 1
    }
    for (let i = startIndex; i < this.length; i++) {
        if (!this[i]) {
            continue
        }
        accumulator = callbackFn(accumulator, this[i], i, this)
    }
    return accumulator
};
  