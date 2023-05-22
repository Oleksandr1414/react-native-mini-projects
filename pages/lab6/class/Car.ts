import IDoors from "../interface/IDoors";
import IMovable from "../interface/Imovable";
import Vechile from "./Vechile";

export default class Car extends Vechile implements IDoors, IMovable {
  numberOfDoors: number;

  constructor(speed: number, doorsCount: number) {
    super(speed);
    this.numberOfDoors = doorsCount;
  }

  move(): string {
    return "Car start moving!";
  }

  openDoor(): string {
    return "Car: door open";
  }
  closeDoor(): string {
    return "Car: door close";
  }

  accelerate(): string {
    return "Car: accelerate";
  }
  decelerate(): string {
    return "Car: decelerate";
  }
}
