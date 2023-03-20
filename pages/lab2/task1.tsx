import validateValue from "../../utils/validateValue";
import {
  Comment,
  Container,
  Input,
  MainContainer,
} from "./../../styles/pageStyles";
import { Chart } from "chart.js/auto";
import { useState, useEffect, useMemo } from "react";
import { DotsList } from "../../styles/diagramStyles";

export default function Task1() {
  const [xn, setXn] = useState<number>();
  const [xk, setXk] = useState<number>();
  const [a, setA] = useState<number>();
  const [h, setH] = useState<number>();
  const [chart, setChart] = useState<any>();

  const [arrayOfX, setArrayOfX] = useState<number[]>([]);
  const [arrayOfY, setArrayOfY] = useState<number[]>([]);

  const dotsList = useMemo(() => {
    if (!xn || !xk || !a || !h || xn > xk) {
      return;
    }
    const list: any[] = [];
    setArrayOfY([]);
    const yList: any[] = [];
    setArrayOfX([]);
    const xList: any[] = [];

    for (let i = xn; i <= xk; i += h) {
      xList.push(i.toFixed(2));
      yList.push(calc(i)?.toFixed(3));
      list.push(
        <div key={i}>
          x = {i.toFixed(2)}, y = {calc(i)?.toFixed(3)}
        </div>
      );
    }

    setArrayOfX(xList);
    setArrayOfY(yList);
    return list;
  }, [xn, a, xk, h]);

  function calc(x: number) {
    if (!xn || !xk || !a || !h || xn > xk) {
      return;
    }

    // Variant 1
    const f1 = (x: number) =>
      Math.abs(Math.pow((2 * x + 5) / (Math.pow(x, 3) + 2), 1 / 3));
    const f2 = (x: number) => Math.sqrt(Math.sin(x * x + 3) + 4) / (x * x + 2);
    const f3 = (x: number) =>
      Math.pow(Math.sin(x + 2), 3) / Math.log(Math.abs(x * x + 3 * x + 1));

    //Variant 25
    // const f1 = (x: number) => Math.pow(Math.abs(x), 5) / Math.tan(x);
    // const f2 = (x: number) => Math.log(x * x + 1);
    // const f3 = (x: number) =>
    //   Math.exp(-2 * x) - Math.pow(Math.abs(x + 1), 1 / 3);

    if (x <= 0) {
      return f1(x);
    } else if (x <= a) {
      return f2(x);
    } else {
      return f3(x);
    }
  }

  useEffect(() => {
    if (!xn || !xk || !a || !h || xn > xk) {
      return;
    }

    let ctx: any = document.getElementById("diagram");
    chart?.destroy();
    setChart(
      new Chart(ctx, {
        type: "line",
        data: {
          labels: arrayOfX,
          datasets: [
            {
              label: "Diagram",
              data: arrayOfY,
              fill: false,
              borderColor: "#00008b",
              tension: 0.1,
            },
          ],
        },
      })
    );
  }, [xn, a, xk, h]);

  return (
    <MainContainer>
      <Comment>
        Створити додаток для табулювання і виведення на екран значення функції,
        також побудувати графік функції:
      </Comment>
      <Container>
        <Input
          placeholder="Xn.."
          type="text"
          onChange={(e) => setXn(validateValue(e.target.value))}
          required
        />
        <Input
          placeholder="Xk.."
          type="text"
          onChange={(e) => setXk(validateValue(e.target.value))}
          required
        />
        <Input
          placeholder="a.."
          type="text"
          onChange={(e) => setA(validateValue(e.target.value))}
          required
        />
        <Input
          placeholder="h.."
          type="text"
          onChange={(e) => setH(validateValue(e.target.value))}
          required
        />
        <DotsList>{dotsList}</DotsList>
      </Container>
      <canvas id="diagram"></canvas>
    </MainContainer>
  );
}
