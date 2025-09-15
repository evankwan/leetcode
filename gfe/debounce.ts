export default function debounce(func: Function, wait: number = 0): Function {
    let timeoutId: number;
    return function(...args: any[]) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func.apply(this, args)
      }, wait)
    }
  }