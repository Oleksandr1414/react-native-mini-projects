import IDoors from "../interface/IDoors";
import IMovable from "../interface/Imovable";
import Train from "./Train";

export default class Express extends Train implements IDoors, IMovable {
  route: object;

  constructor(speed: number, carsCount: number, route: object) {
    super(speed, carsCount);
    this.route = route;
  }

  setRoute(route: object): void {
    this.route = route;
  }

  activateExpressMode() {
    return "Express: activate express mode";
  }

  openDoor(): string {
    return "Express: door open";
  }
  closeDoor(): string {
    return "Express: door close";
  }

  accelerate(): string {
    return "Express: accelerate";
  }
  decelerate(): string {
    return "Express: decelerate";
  }
}
