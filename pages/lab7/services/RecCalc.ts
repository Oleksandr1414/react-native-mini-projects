export default class RecCalc {
  factorial(num: number): number {
    if (num <= 1) {
      return 1;
    }

    return num * this.factorial(num - 1);
  }

  calculateSeries(x: number, n: number): number {
    if (n === 0) {
      return Math.pow(x, 2 * n + 1) / this.factorial(2 * n + 1);
    }

    return (
      Math.pow(x, 2 * n + 1) / this.factorial(2 * n + 1) +
      this.calculateSeries(x, n - 1)
    );
  }
}
