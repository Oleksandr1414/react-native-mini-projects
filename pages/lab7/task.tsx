import { Chart } from "chart.js/auto";
import { Comment, Container, MainContainer } from "./../../styles/pageStyles";
import { useState, useEffect, useMemo } from "react";
import TabService from "./services/TabService";
import RecCalc from "./services/RecCalc";
import LineCalc from "./services/LineCalc";

export default function Task() {
  const [chart, setChart] = useState<any>();
  const [recRes, setRecRes] = useState<number>();
  const [lineRes, setLineRes] = useState<number>();

  useEffect(() => {
    const xy = new TabService().getTab(-3 * 3.14, 3 * 3.14, 0.5);

    setLineRes(new LineCalc().calculateSeries(1.4, 32));
    setRecRes(new RecCalc().calculateSeries(1.2, 12));

    let ctx: any = document.getElementById("diagram");
    chart?.destroy();
    setChart(
      new Chart(ctx, {
        type: "line",
        data: {
          labels: Array.from(xy.keys()).map((el) => el.toFixed(3)),
          datasets: [
            {
              label: "Sh(x)",
              data: Array.from(xy.values()).map((el) => el.toFixed(3)),
              fill: false,
              borderColor: "#00008b",
              tension: 0.1,
            },
          ],
        },
      })
    );
  }, []);

  return (
    <MainContainer>
      <Comment>
        Завдання по роботі з сервісами:
        <br />
        1. Розробити сервіс для табулювання функції відповідно до варіанту
        <br />
        2. Розробити сервіс для розрахунку значень функції за допомогою ряду
        відповідно до варіанту
        <br />
        3. Розробити сервіс для розрахунку значень функції за допомогою рекурсії
        відповідно до варіанту
        <br />
        4. Розробити сервіс для логування обчислених значень у консоль та
        використати його у попередніх трьох сервісах
        <br />
        5. У основному застосунку підключити сервіси, вивести результати усіх
        розрахунків та побудувати графіки для усіх обрахунків.
        <br />
        Для перевірки роботи розроблених сервісів необхідно використовувати Unit
        тести. Необхідно протестувати:  проведення розрахунків
        <img src={require("./img.png")} style={{ width: "100%" }} />
      </Comment>
      <Container>
        <canvas id="diagram"></canvas>
        <p>RecRes (x = 1.2, n = 12): {recRes}</p>
        <p>LineRes (x = 1.4, n = 32): {lineRes}</p>
      </Container>
    </MainContainer>
  );
}
