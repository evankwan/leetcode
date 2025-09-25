export function isArray(value: unknown): boolean {
  return value instanceof Array;
}

export function isFunction(value: unknown): boolean {
  return value instanceof Function;
}

export function isObject(value: unknown): boolean {
  if (value === undefined || value === null) return false;
  return typeof value === "object" || isFunction(value);
}

export function isPlainObject(value: unknown): boolean {
  if (Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }
  const prototype: any = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
