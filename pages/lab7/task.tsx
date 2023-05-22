import Car from "./class/Car";
import Train from "./class/Train";
import Express from "./class/Express";
import { Comment, Container, MainContainer } from "../../styles/pageStyles";

export default function Task() {
  const car = new Car(120, 4);
  const train = new Train(140, 12);
  const express = new Express(180, 10, {
    start: "FirstDot",
    finish: "SecondDot",
  });

  const expressRoute = () => {
    let s = "";
    for (const field in express.route) {
      s += `${field}: ${express.route[field]}; `;
    }
    return s;
  };

  return (
    <MainContainer>
      <Comment>
        Автомобіль, поїзд, транспортний засіб, експрес
        <br />
        <br />
        1. Розробити ієрархію класів відповідно до варіанту завдання(у
        запропоновану у варіанті ієрархію класів можна додавати додаткові класи
        або інтерфейси). Деякі з класів можуть бути абстрактними. <br />
        2. Реалізувати для ієрархії механізм інтерфейсів, при цьому один з
        класів повинен реалізовувати як мінімум два інтерфейси. <br />
        3. Кожен клас з ієрархії класів повинен мати не менше двох методів.
        <br />
        4. Розроблена ієрархія повинна відповідати основним принципам SOLID та
        патерну High Cohesion + Low Coupling <br />
        Для перевірки роботи розроблених класів та їх методів необхідно
        використовувати Unit тести. Необхідно протестувати: <br /> створення
        усіх класів <br /> усі методи класів
      </Comment>
      <Container>
        <p>
          Car: speed: {car.speed}, number of doors: {car.numberOfDoors}
        </p>
        <p>
          Train: speed: {train.speed}, number of doors: {train.numberOfCars}
        </p>
        <p>
          Express: speed: {express.speed}, number of doors:
          {express.numberOfCars}, route: {expressRoute()}
        </p>
      </Container>
    </MainContainer>
  );
}
