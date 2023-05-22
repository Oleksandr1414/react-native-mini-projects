import React from "react";
import Product from "./interface/Product";
import { Button } from "../../styles/pageStyles";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Детальна інформація про продукт</h3>
        <p>Назва: {product.name}</p>
        <p>Одиниця виміру: {product.unit}</p>
        <p>Кількість на складі: {product.quantity}</p>
        <p>Ціна за одиницю: {product.price}</p>

        {product.manufacturers.length > 0 && (
          <div>
            <h4>Виробники:</h4>
            <ul>
              {product.manufacturers.map((manufacturer, index) => (
                <li key={index}>{manufacturer}</li>
              ))}
            </ul>
          </div>
        )}

        <Button type="button" onClick={onClose}>
          Закрити
        </Button>
      </div>
    </div>
  );
};

export default ProductModal;
