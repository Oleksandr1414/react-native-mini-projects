export default abstract class Vechile {
  speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  abstract move(): string;
}
