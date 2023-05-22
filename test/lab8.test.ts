import assert from "assert";
import ProductValidationService from "../pages/lab8/services/ProductValidationService";
import Validators from "../pages/lab8/services/Validators";

describe("Lab8 | Classes tests", () => {
  describe("Validators", () => {
    describe("validateName", () => {
      it("should return true for a non-empty name", () => {
        const result = Validators.validateName("Product Name");
        assert.equal(result, true);
      });

      it("should return false for an empty name", () => {
        const result = Validators.validateName("");
        assert.equal(result, false);
      });
    });

    describe("validateUnit", () => {
      it("should return true for a non-empty name", () => {
        const result = Validators.validateUnit("Product Name");
        assert.equal(result, true);
      });

      it("should return false for an empty name", () => {
        const result = Validators.validateUnit("");
        assert.equal(result, false);
      });
    });

    describe("validateQuantity", () => {
      it("should return true for a non-empty name", () => {
        const result = Validators.validateQuantity(45);
        assert.equal(result, true);
      });

      it("should return false for an empty name", () => {
        const result = Validators.validateQuantity(-451);
        assert.equal(result, false);
      });
    });

    describe("validatePrice", () => {
      it("should return true for a non-empty name", () => {
        const result = Validators.validatePrice(10);
        assert.equal(result, true);
      });

      it("should return false for an empty name", () => {
        const result = Validators.validatePrice(-2);
        assert.equal(result, false);
      });
    });
  });

  describe("ProductValidationService", () => {
    describe("validateProduct", () => {
      it("should return true for a valid product", () => {
        const product = {
          name: "Product Name",
          unit: "Unit",
          quantity: 10,
          price: 9.99,
          manufacturers: [],
        };
        const service = new ProductValidationService();
        const result = service.validateProduct(product);
        assert.equal(result, true);
      });

      it("should return false for an invalid product", () => {
        const product = {
          name: "",
          unit: "Unit",
          quantity: 0,
          price: -5,
          manufacturers: [],
        };
        const service = new ProductValidationService();
        const result = service.validateProduct(product);
        assert.equal(result, false);
      });
    });
  });
});
