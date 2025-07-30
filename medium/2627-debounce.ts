type F = (...args: number[]) => void

const debounce = function(fn: F, t: number): F {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(function() {
            fn(...args)
        }, t)
    }
};

export {}