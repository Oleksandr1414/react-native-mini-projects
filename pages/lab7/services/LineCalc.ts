import LogService from "./LogService";

export default class LineCalc {
  logService = new LogService();

  factorial(num: number): number {
    if (num <= 1) {
      return 1;
    }

    return num * this.factorial(num - 1);
  }

  calculateSeries(x: number, n: number): number {
    let result = 0;

    for (let i = 0; i <= n; i++) {
      const numerator = Math.pow(x, 2 * i + 1);
      const denominator = this.factorial(2 * i + 1);
      const term = numerator / denominator;
      result += term;
      this.logService.write("n = " + i + ", sum = " + result);
    }

    return result;
  }
}
