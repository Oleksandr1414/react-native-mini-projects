import AnotherProductValidationService from "./services/AnotherProductValidationService";
import Product from "./interface/Product";
import ProductService from "./interface/ProductService";
import ProductValidationService from "./services/ProductValidationService";
import React, { useState } from "react";
import {
  Button,
  Comment,
  Container,
  Input,
  MainContainer,
} from "../../styles/pageStyles";
import ProductModal from "./modalDetailsView";

export default function Task() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Product>({
    name: "",
    unit: "",
    quantity: 0,
    price: 0,
    manufacturers: [],
  });

  const [validationService, setValidationService] = useState<ProductService>(
    new ProductValidationService()
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddManufacturer = () => {
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      manufacturers: [...prevProduct.manufacturers, ""],
    }));
  };

  const handleRemoveManufacturer = (index: number) => {
    setNewProduct((prevProduct) => {
      const updatedManufacturers = [...prevProduct.manufacturers];
      updatedManufacturers.splice(index, 1);
      return {
        ...prevProduct,
        manufacturers: updatedManufacturers,
      };
    });
  };

  const handleManufacturerInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    setNewProduct((prevProduct) => {
      const updatedManufacturers = [...prevProduct.manufacturers];
      updatedManufacturers[index] = value;
      return {
        ...prevProduct,
        manufacturers: updatedManufacturers,
      };
    });
  };

  const handleAddProduct = () => {
    if (validationService.validateProduct(newProduct)) {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      setNewProduct({
        name: "",
        unit: "",
        quantity: 0,
        price: 0,
        manufacturers: [],
      });
    } else {
      alert("Некоректні дані продукту!");
    }
  };

  const handleDeleteProduct = (index: number) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
  };

  const handleValidationServiceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedService = event.target.value;

    if (selectedService === "service1") {
      setValidationService(new ProductValidationService());
    } else if (selectedService === "service2") {
      setValidationService(new AnotherProductValidationService());
    }
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <MainContainer>
      <Comment>
        Завдання по роботі з динамічними реактивними формами: <br />
        1. Розробити компонент який буде вміщувати динамічну реактивну форму
        відповідно до варіанту. <br />
        2. Передбачити у формі можливість додавання та видалення певних полів
        під час виконання. <br />
        3. Провести валідування ведених у форму значень, як за допомогою списку
        статичних методів класу Validators. <br />
        4. Створити сервіси для більш точного валідування ведених даних,
        кількість сервісів не менше двох. <br />
        5. Створити модульні тести для перевірки сервісів та функцій для
        валідування
      </Comment>
      <Container>
        <div>
          <h3>Додати продукт</h3>
          <form>
            <label>
              Назва товару:
              <Input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Одиниця виміру:
              <Input
                type="text"
                name="unit"
                value={newProduct.unit}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Кількість на складі:
              <Input
                type="number"
                name="quantity"
                value={newProduct.quantity}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Ціна за одиницю:
              <Input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <div>
              <h4>Список виробників товару:</h4>
              {newProduct.manufacturers.map((manufacturer, index) => (
                <div key={index}>
                  <Input
                    type="text"
                    value={manufacturer}
                    onChange={(e) => handleManufacturerInputChange(e, index)}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveManufacturer(index)}
                  >
                    Видалити
                  </button>
                </div>
              ))}
              <Button type="button" onClick={handleAddManufacturer}>
                Додати виробника
              </Button>
            </div>
            <br />
            <Button type="button" onClick={handleAddProduct}>
              Додати
            </Button>
          </form>
          <hr />
          <h3>Список продуктів</h3>
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                {product.name} - {product.quantity} {product.unit} (Ціна:{" "}
                {product.price})
                {product.manufacturers.length > 0 && (
                  <div>
                    <h4>Виробники товару:</h4>
                    <ul>
                      {product.manufacturers.map((manufacturer, i) => (
                        <li key={i}>{manufacturer}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => handleViewDetails(product)}
                >
                  Детально
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(index)}
                >
                  Видалити
                </button>
              </li>
            ))}
          </ul>
          <hr />
          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              onClose={handleCloseDetails}
            />
          )}
          <hr />
          <div style={{ display: "flex" }}>
            <h3>Вибрати сервіс валідації</h3>
            <select onChange={handleValidationServiceChange}>
              <option value="service1">Сервіс 1</option>
              <option value="service2">Сервіс 2</option>
            </select>
          </div>
        </div>
      </Container>
    </MainContainer>
  );
}
