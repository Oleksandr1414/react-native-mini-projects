import Product from "../interface/Product";
import ProductService from "../interface/ProductService";
import Validators from "./Validators";

export default class ProductValidationService implements ProductService {
  validateProduct(product: Product): boolean {
    const { name, unit, quantity, price } = product;

    return (
      Validators.validateName(name) &&
      Validators.validateUnit(unit) &&
      Validators.validateQuantity(quantity) &&
      Validators.validatePrice(price)
    );
  }
}
