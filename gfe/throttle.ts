type ThrottleFunction<T extends any[]> = (...args: T) => any;

export default function throttle<T extends any[]>(
  func: ThrottleFunction<T>,
  wait: number, // in ms
): ThrottleFunction<T> {
  // init a throttling var
  let isThrottling = false
  return function(...args) {
    // when the function is called, check the toggle
    if (!isThrottling) { // if the toggle is off
      // call the function
      func.apply(this, args)
      // toggle the switch on
      isThrottling = true
      // set a timer for wait ms 
      setTimeout(() => {
        // after wait ms we toggle the switch again
        isThrottling = false
      }, wait)
    }
  };
}