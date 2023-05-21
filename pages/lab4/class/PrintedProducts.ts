// Печатна продукція (поле назва)

// Журнал (поля: tираж, ціна),
// Газета (поля: кількість сторінок, вартість сторінки, тираж)

// Вартість тиражу.

export default abstract class PrintedProducts {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract costOfCirculation(): number;
}
