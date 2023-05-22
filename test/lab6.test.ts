import Car from "../pages/lab6/class/Car";
import Train from "../pages/lab6/class/Train";
import Express from "../pages/lab6/class/Express";
import assert from "assert";

describe("Lab6 | Classes tests", function () {
  describe("Car", function () {
    it("should work, create object", function () {
      const objOfCar = new Car(120, 4);

      assert.notEqual(objOfCar, undefined);
      assert.equal(objOfCar.speed, 120);
      assert.equal(objOfCar.numberOfDoors, 4);
    });

    it("should work, move", function () {
      const objOfCar = new Car(120, 4);
      assert.equal(objOfCar.move(), "Car start moving!");
    });
    it("should work, openDoor", function () {
      const objOfCar = new Car(120, 4);
      assert.equal(objOfCar.openDoor(), "Car: door open");
    });
    it("should work, closeDoor", function () {
      const objOfCar = new Car(120, 4);
      assert.equal(objOfCar.closeDoor(), "Car: door close");
    });
    it("should work, accelerate", function () {
      const objOfCar = new Car(120, 4);
      assert.equal(objOfCar.accelerate(), "Car: accelerate");
    });
    it("should work, decelerate", function () {
      const objOfCar = new Car(120, 4);
      assert.equal(objOfCar.decelerate(), "Car: decelerate");
    });
  });

  describe("Train", function () {
    it("should work, create object", function () {
      const objOfTrain = new Train(120, 18);

      assert.notEqual(objOfTrain, undefined);
      assert.equal(objOfTrain.speed, 120);
      assert.equal(objOfTrain.numberOfCars, 18);
    });

    it("should work, coupleCars", function () {
      const objOfTrain = new Train(120, 18);
      assert.equal(objOfTrain.coupleCars(), "Train couple cars");
    });
    it("should work, move", function () {
      const objOfTrain = new Train(120, 18);
      assert.equal(objOfTrain.move(), "Train start moving!");
    });
    it("should work, openDoor", function () {
      const objOfTrain = new Train(120, 18);
      assert.equal(objOfTrain.openDoor(), "Train: door open");
    });
    it("should work, closeDoor", function () {
      const objOfTrain = new Train(120, 18);
      assert.equal(objOfTrain.closeDoor(), "Train: door close");
    });
    it("should work, accelerate", function () {
      const objOfTrain = new Train(120, 18);
      assert.equal(objOfTrain.accelerate(), "Train: accelerate");
    });
    it("should work, decelerate", function () {
      const objOfTrain = new Train(120, 18);
      assert.equal(objOfTrain.decelerate(), "Train: decelerate");
    });
  });

  describe("Express", function () {
    it("should work, create object", function () {
      const objOfExpress = new Express(120, 18, {
        start: "StartPos",
        finish: "FinishPos",
      });

      assert.notEqual(objOfExpress, undefined);
      assert.equal(objOfExpress.speed, 120);
      assert.equal(objOfExpress.numberOfCars, 18);
    });

    it("should work, setRoute", function () {
      const objOfExpress = new Express(120, 18, {
        start: "StartPos",
        finish: "FinishPos",
      });
      assert.equal(objOfExpress.coupleCars(), "Train couple cars");
    });
    it("should work, activateExpressMode", function () {
      const objOfExpress = new Express(120, 18, {
        start: "StartPos",
        finish: "FinishPos",
      });
      assert.equal(
        objOfExpress.activateExpressMode(),
        "Express: activate express mode"
      );
    });
    it("should work, move", function () {
      const objOfExpress = new Express(120, 18, {
        start: "StartPos",
        finish: "FinishPos",
      });
      assert.equal(objOfExpress.move(), "Train start moving!");
    });
    it("should work, openDoor", function () {
      const objOfExpress = new Express(120, 18, {
        start: "StartPos",
        finish: "FinishPos",
      });
      assert.equal(objOfExpress.openDoor(), "Express: door open");
    });
    it("should work, closeDoor", function () {
      const objOfExpress = new Express(120, 18, {
        start: "StartPos",
        finish: "FinishPos",
      });
      assert.equal(objOfExpress.closeDoor(), "Express: door close");
    });
    it("should work, accelerate", function () {
      const objOfExpress = new Express(120, 18, {
        start: "StartPos",
        finish: "FinishPos",
      });
      assert.equal(objOfExpress.accelerate(), "Express: accelerate");
    });
    it("should work, decelerate", function () {
      const objOfExpress = new Express(120, 18, {
        start: "StartPos",
        finish: "FinishPos",
      });
      assert.equal(objOfExpress.decelerate(), "Express: decelerate");
    });
  });
});
