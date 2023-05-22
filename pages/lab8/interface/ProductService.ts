export default interface ProductService {
  validateProduct(product: Product): boolean;
}

interface Product {
  name: string;
  unit: string;
  quantity: number;
  price: number;
}
