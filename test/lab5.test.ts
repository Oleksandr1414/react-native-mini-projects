import Magazine from "../pages/lab4/class/Magazine";
import Newspaper from "../pages/lab4/class/Newspaper";
import assert from "assert";

describe("Classes tests", function () {
  describe("Magazine", function () {
    it("should work, create object", function () {
      const obj = new Magazine("Paper", 1000, 120);

      assert.notEqual(obj, undefined);
      assert.equal(obj.name, "Paper");
      assert.equal(obj.circulation, 1000);
      assert.equal(obj.price, 120);
    });

    it("should work, costOfCirculation", function () {
      const obj = new Magazine("Paper", 1000, 120);

      assert.notEqual(obj, undefined);
      assert.equal(obj.costOfCirculation(), 1000 * 120);
    });
  });

  describe("Newspaper", function () {
    it("should work, create object", function () {
      const obj = new Newspaper("Paper", 1000, 300, 1);

      assert.notEqual(obj, undefined);
      assert.equal(obj.name, "Paper");
      assert.equal(obj.circulation, 1000);
      assert.equal(obj.numberOfPages, 300);
      assert.equal(obj.costPerPage, 1);
    });

    it("should work, costOfCirculation", function () {
      const obj = new Newspaper("Paper", 1000, 300, 1);

      assert.notEqual(obj, undefined);
      assert.equal(obj.costOfCirculation(), 1000 * 300);
    });
  });
});
