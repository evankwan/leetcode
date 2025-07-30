const createCounter = function (n: number): () => number {
    return function() {
        return n++
    }
}