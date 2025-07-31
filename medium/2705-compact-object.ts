type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
    if (!obj) return obj
    if (Array.isArray(obj)) {
        let array: JSONValue[] = []
        for (let i = 0; i < obj.length; i++) {
            let item = obj[i]
            if (Array.isArray(obj)) {
                item = compactObject(obj[i] as Obj)
            }

            if (!item) {
                continue
            }
            array.push(item)
        }
        return array
    }

    Object.keys(obj).forEach(function(key) {
        if (!Boolean(obj[key])) {
            delete obj[key]
        } else if (typeof obj[key] === "object") {
            obj[key] = compactObject(obj[key] as Obj)
        }
    })
    return obj
}

export {}