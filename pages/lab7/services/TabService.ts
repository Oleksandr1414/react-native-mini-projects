import LogService from "./LogService";

export default class TabService {
  xy = new Map();
  logService = new LogService();

  getTab(xStart: number, xEnd: number, step: number) {
    for (let x = xStart; x <= xEnd; x += step) {
      const sh = Math.sinh(x);
      this.xy.set(x, sh);
      this.logService.write("x = " + x.toFixed(2) + ", y = " + sh.toFixed(2));
    }
    return this.xy;
  }
}
