export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = Array<ClassValue>;

function recursiveClassNames(
  className: string,
  args: Array<ClassValue>,
): string {
  return `${className} ${classNames(...args)}`;
}

function addClass(className: string, newClass: string | number | boolean): string {
  return `${className} ${newClass}`
}

export default function classNames(...args: Array<ClassValue>): string {
  let className: string = "";
  // loop through args
  for (const arg of args) {
    // if it's a string, add the string
    if (typeof arg === "string") {
      className = addClass(className, arg)
      continue
    }

    // if it's an array, call the method again with the array spread out
    if (Array.isArray(arg)) {
      className = recursiveClassNames(className, arg)
      continue
    }

    // if it's an object, loop through object
    if (typeof arg === "object") {
      for (const property in arg) {
        // if the val is true, add the property name to the string
        if (arg[property]) {
          className = addClass(className, property)
        }
      }
      continue
    }

    if (arg) {
      className = addClass(className, arg)
    }
  }
  return className.trim();
}
