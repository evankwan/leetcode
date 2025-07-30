type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    return async function(...args) {
        return new Promise(function(res, rej) {
            fn(...args)
                .then(res)
                .catch(rej);
            setTimeout(function() {
                rej("Time Limit Exceeded")
            }, t)
        })
    }
}

export {}