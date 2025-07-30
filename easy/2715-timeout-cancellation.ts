type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

let cancellable = function(fn: Fn, args: JSONValue[], t: number): Function {
    const timeoutId = setTimeout(fn, t, ...args)
    return function() {
        return clearTimeout(timeoutId)
    }
}

export {}