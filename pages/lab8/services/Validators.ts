export default class Validators {
  static validateName(name: string): boolean {
    return name.trim() !== "";
  }

  static validateUnit(unit: string): boolean {
    return unit.trim() !== "";
  }

  static validateQuantity(quantity: number): boolean {
    return quantity > 0;
  }

  static validatePrice(price: number): boolean {
    return price > 0;
  }
}
