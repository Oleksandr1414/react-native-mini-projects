import PrintedProducts from "./PrintedProducts";

export default class Newspaper extends PrintedProducts {
  circulation: number;
  numberOfPages: number;
  costPerPage: number;

  constructor(
    name: string,
    circulation: number,
    numberOfPages: number,
    costPerPage: number
  ) {
    super(name);
    this.circulation = circulation;
    this.numberOfPages = numberOfPages;
    this.costPerPage = costPerPage;

    console.log(name, ":", { circulation, numberOfPages, costPerPage });
  }

  costOfCirculation() {
    return this.circulation * this.numberOfPages * this.costPerPage;
  }
}
