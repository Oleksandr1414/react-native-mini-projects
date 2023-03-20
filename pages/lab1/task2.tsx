import validateValue from "../../utils/validateValue";
import { useState, useMemo } from "react";
import {
  Button,
  Comment,
  Container,
  Input,
  MainContainer,
} from "../../styles/pageStyles";

export default function Task2() {
  const [a, setA] = useState<number>();
  const [b, setB] = useState<number>();
  const [res, setResult] = useState<number>();
  const [err, setErr] = useState<string>("");

  function calc() {
    setErr("");

    if (a === undefined || b === undefined || a > b) {
      setErr("Заповніть коректно усі поля.");
      return;
    }

    let result: number | undefined;
    for (let i = Math.round(a); i <= b; i++) {
      if (i % 8) {
        continue;
      }

      result = result ? result * i : i;
    }

    setResult(result || 0);
  }

  const resultView = useMemo(() => {
    if (err.length) {
      return (
        <Container style={{ marginTop: "15px", color: "red" }}>{err}</Container>
      );
    }

    if (typeof res === "undefined") {
      return null;
    }

    return (
      <Container style={{ marginTop: "15px" }}>
        {res || res === 0 ? `Результа: ${res}` : `Числа не знайдено`}
      </Container>
    );
  }, [res, err]);

  return (
    <MainContainer>
      <Comment>
        Підрахуйте добуток цілих чисел на заданому проміжку чисел &#91;a,b&#93;,
        парних і кратних 8.
      </Comment>
      <Container>
        <Input
          placeholder="a.."
          type="text"
          onChange={(e) => setA(validateValue(e.target.value))}
          required
        />
        <Input
          placeholder="b.."
          type="text"
          onChange={(e) => setB(validateValue(e.target.value))}
          required
        />
        <Button onClick={calc}>Порахувати</Button>
      </Container>
      {resultView}
    </MainContainer>
  );
}
