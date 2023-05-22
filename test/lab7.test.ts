import assert from "assert";
import LogService from "../pages/lab7/services/LogService";
import TabService from "../pages/lab7/services/TabService";
import RecCalc from "../pages/lab7/services/RecCalc";
import LineCalc from "../pages/lab7/services/LineCalc";

describe("Lab7 | Classes tests", function () {
  describe("LogService", function () {
    it("should work, create object", function () {
      const obj = new LogService();

      assert.notEqual(obj, undefined);
    });

    it("should work, write", function () {
      const response = new LogService().write("test, write function");

      assert.equal(response.response.success, true);
    });
  });

  describe("TabService", function () {
    it("should work, create object", function () {
      const obj = new TabService();

      assert.notEqual(obj, undefined);
    });

    it("should work, write", function () {
      const response = new TabService().logService.write(
        "TabService write function"
      );

      assert.equal(response.response.success, true);
    });

    it("should work, write", function () {
      const obj = new TabService().getTab(-1, 1, 0.2);

      assert.notEqual(obj, undefined);
      assert.equal(Array.from(obj.keys()).length, 11);
      assert.equal(Array.from(obj.values()).length, 11);
    });
  });

  describe("RecCalc", function () {
    it("should work, create object", function () {
      const obj = new RecCalc();

      assert.notEqual(obj, undefined);
    });

    it("should work, calculateSeries", function () {
      const res = new RecCalc().calculateSeries(2, 4);

      assert.notEqual(res, 0);
      assert.notEqual(res, undefined);
      assert.equal(res, 3.626807760141093);
    });
  });

  describe("LogService", function () {
    it("should work, create object", function () {
      const obj = new LineCalc();

      assert.notEqual(obj, undefined);
    });

    it("should work, write", function () {
      const response = new LineCalc().logService.write(
        "LineCalc test, write function"
      );

      assert.equal(response.response.success, true);
    });

    it("should work, calculateSeries", function () {
      const res = new LineCalc().calculateSeries(2, 4);

      assert.notEqual(res, 0);
      assert.notEqual(res, undefined);
      assert.equal(res, 3.626807760141093);
    });
  });
});
