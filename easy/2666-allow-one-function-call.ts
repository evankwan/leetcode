type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

let once = function(fn: Function): OnceFn {
    let isCalled = false;
    return function(...args) {
        if (isCalled) {
            return undefined
        }
        isCalled = true
        return fn(...args)
    }
}

export {}