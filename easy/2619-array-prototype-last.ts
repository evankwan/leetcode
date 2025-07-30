interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function(): any | -1 {
    return this.length - 1 >= 0
        ? this[this.length - 1]
        : -1
};