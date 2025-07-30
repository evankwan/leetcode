type Fn = (...params: number[]) => number

let memoize = function(fn: Fn): Fn {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args)
        if (cache.has(key)) {
            return cache.get(key)
        }
        const res = fn(...args)
        cache.set(key, res)
        return res
    }
}

export {}