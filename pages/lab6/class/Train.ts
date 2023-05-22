import IDoors from "../interface/IDoors";
import IMovable from "../interface/Imovable";
import Vechile from "./Vechile";

export default class Train extends Vechile implements IDoors, IMovable {
  numberOfCars: number;

  constructor(speed: number, carsCount: number) {
    super(speed);
    this.numberOfCars = carsCount;
  }

  coupleCars(): string {
    return "Train couple cars";
  }

  move(): string {
    return "Train start moving!";
  }

  openDoor(): string {
    return "Train: door open";
  }
  closeDoor(): string {
    return "Train: door close";
  }

  accelerate(): string {
    return "Train: accelerate";
  }
  decelerate(): string {
    return "Train: decelerate";
  }
}
