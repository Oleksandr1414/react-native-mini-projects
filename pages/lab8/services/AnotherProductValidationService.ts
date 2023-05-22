import Product from "../interface/Product";
import ProductService from "../interface/ProductService";

export default class AnotherProductValidationService implements ProductService {
  validateProduct(product: Product): boolean {
    // Custom validation logic specific to the second service
    return true;
  }
}
