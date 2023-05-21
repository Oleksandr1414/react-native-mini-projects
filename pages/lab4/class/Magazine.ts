import PrintedProducts from "./PrintedProducts";

export default class Magazine extends PrintedProducts {
  circulation: number;
  price: number;

  constructor(name: string, circulation: number, price: number) {
    super(name);
    this.circulation = circulation;
    this.price = price;

    console.log(name, ":", { circulation, price });
  }

  costOfCirculation() {
    return this.circulation * this.price;
  }
}
