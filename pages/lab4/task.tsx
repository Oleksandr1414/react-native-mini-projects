import validateValue from "../../utils/validateValue";
import Magazine from "./class/Magazine";
import Newspaper from "./class/Newspaper";
import { useState, useMemo } from "react";
import {
  Button,
  Comment,
  Container,
  Input,
  MainContainer,
} from "../../styles/pageStyles";

//Організувати обчислення середньої вартості журналів і середньої вартості газет.

export default function Task() {
  // const listOfMagazines = new Array<Magazine>();
  const listOfMagazines = new Map<string, number>();
  const listOfNewspapers = new Map<string, number>();
  let averageCostMagazines: number = 0;
  let averageCostNewspapers: number = 0;
  const [count, setCount] = useState<number>(0);
  const [update, setUpdate] = useState<boolean>(false);

  const resultView = useMemo(() => {
    if (count < 5) {
      return null;
    }
    averageCostMagazines = 0;
    averageCostNewspapers = 0;

    for (let i = 1; i <= count; i++) {
      const rNumber = (min: number, max: number) =>
        Math.round(Math.random() * (max - min) + min);

      const magazine = new Magazine(
        `Magazine_${i}`,
        rNumber(0, 120),
        rNumber(0, 250)
      );
      const newspaper = new Newspaper(
        `Newspaper_${i}`,
        rNumber(0, 120),
        rNumber(0, 300),
        rNumber(0.5, 1)
      );

      listOfMagazines.set(`Magazine_${i}`, magazine.costOfCirculation());
      listOfNewspapers.set(`Newspaper_${i}`, newspaper.costOfCirculation());
    }

    const listView = (map: any) => {
      const list = new Array<any>();
      map.forEach((value: number, key: string) => {
        key.includes("Magazine")
          ? (averageCostMagazines += value)
          : (averageCostNewspapers += value);
        list.push(
          <p key={key} style={{ color: "#000" }}>
            {key}: {value}
          </p>
        );
      });
      map.get("Magazine_1")
        ? (averageCostMagazines /= list.length)
        : (averageCostNewspapers /= list.length);
      return list;
    };

    return (
      <Container>
        {listView(listOfMagazines)}
        <p>Average cost: {averageCostMagazines}</p>
        <br />
        {listView(listOfNewspapers)}
        <p>Average cost: {averageCostNewspapers}</p>
      </Container>
    );
  }, [update]);

  return (
    <MainContainer>
      <Comment>
        Скласти програму з абстрактним батьківським класом і двома об&#39;єктами
        – нащадками. Реалізувати циклічне виведення параметрів об&#39;єктів,
        використовуючи поліморфний контейнер - масив об&#39;єктів базового класу
        (кількість об&#39;єктів&gt; = 5)
      </Comment>
      <Container>
        <Input
          placeholder="Кількість.."
          type="number"
          min={5}
          onChange={(e) => setCount(validateValue(e.target.value) || 0)}
          required
        />
        <Button onClick={() => setUpdate((prev) => !prev)}>Розрахувати</Button>
      </Container>
      {resultView}
    </MainContainer>
  );
}
