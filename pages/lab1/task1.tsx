import validateValue from "../../utils/validateValue";
import { useState, useMemo } from "react";
import {
  Button,
  Comment,
  Container,
  Input,
  MainContainer,
} from "../../styles/pageStyles";

export default function Task1() {
  const [a, setA] = useState<number>();
  const [b, setB] = useState<number>();
  const [c, setC] = useState<number>();
  const [res, setResult] = useState<number>();
  const [err, setErr] = useState<string>("");

  function calc() {
    setErr("");

    if (a === undefined || b === undefined || c === undefined) {
      setErr("Заповніть коректно усі поля.");
      return;
    }

    setResult(
      !(a % 2) && !(b % 2) && !(c % 2) ? a * b * c : Math.pow(a + b + c, 2)
    );
  }

  const resultView = useMemo(() => {
    if (err.length) {
      return (
        <Container style={{ marginTop: "15px", color: "red" }}>{err}</Container>
      );
    }

    if (res === undefined) {
      return null;
    }

    return <Container style={{ marginTop: "15px" }}>Результа: {res}</Container>;
  }, [res, err]);

  return (
    <MainContainer>
      <Comment>
        Задано три числа. Якщо всі вони парні, то знайти їх добуток. В іншому
        випадку – квадрат суми.
      </Comment>
      <Container>
        <Input
          placeholder="Перше число.."
          type="text"
          onChange={(e) => setA(validateValue(e.target.value))}
          required
        />
        <Input
          placeholder="Друге число.."
          type="text"
          onChange={(e) => setB(validateValue(e.target.value))}
          required
        />
        <Input
          placeholder="Третє число.."
          type="text"
          onChange={(e) => setC(validateValue(e.target.value))}
          required
        />
        <Button onClick={calc}>Порахувати</Button>
      </Container>
      {resultView}
    </MainContainer>
  );
}
