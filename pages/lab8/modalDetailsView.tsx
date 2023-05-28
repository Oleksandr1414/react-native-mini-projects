import React, { useState } from "react";
import Product from "./interface/Product";
import { Button } from "../../styles/pageStyles";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onUpdate: (product: any) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onUpdate,
}) => {
  const [newData, setNewData] = useState(product);

  const handleInputChange = (fieldName: string, value: any) => {
    setNewData((prevData) => ({
      ...prevData,
      [fieldName]: fieldName !== "manufacturers" ? value : [value],
    }));
  };

  const handleUpdate = () => {
    onUpdate(newData);
  };

  return (
    <div>
      {Object.keys(product).map((fieldName) => (
        <div key={fieldName}>
          <label>{fieldName}</label>
          <input
            type="text"
            value={newData[fieldName]}
            onChange={(e) => handleInputChange(fieldName, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleUpdate}>Оновити</button>
      <button onClick={onClose}>Закрити</button>
    </div>
  );
};

export default ProductModal;
