function climbStairs(n: number): number {
  if (n < 4) return n;
  let step: number = 1;
  let steps: number[] = [1, 1];
  while (step !== n) {
    steps.push(steps[steps.length - 1] + steps[steps.length - 2]);
    step++;
  }
  return steps[steps.length - 1];
}
