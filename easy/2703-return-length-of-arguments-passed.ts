type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

const argumentsLength = function (...args: JSONValue[]): number {
  return args.length;
};
