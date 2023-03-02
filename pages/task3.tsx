import validateValue from "../utils/validateValue";
import getUniqueKey from "../utils/getUniqueKey";
import { useState, useMemo } from "react";
import {
  Comment,
  Container,
  Input,
  MainContainer,
  Table,
  TBody,
  Td,
  Text,
  Tr,
} from "../styles/pageStyles";

export default function Task2() {
  const [n, setN] = useState<number>();

  const resultTable = useMemo(() => {
    if (typeof n === "undefined") {
      return null;
    }

    const tdSums: number[] = new Array(n);
    const rows: number[][] = new Array(n);

    for (let i = 0; i < rows.length; i++) {
      const tdValues: number[] = new Array(n);
      for (let i = 0; i < tdValues.length; i++) {
        tdValues[i] = Math.round(Math.random() * 20 - 6);
        tdSums[i] =
          tdSums[i] || tdSums[i] === 0 ? tdSums[i] * tdValues[i] : tdValues[i];
      }
      rows[i] = tdValues;
    }

    return (
      <Container>
        <Table>
          <TBody>
            {rows.map((arr) => (
              <Tr key={getUniqueKey()}>
                {arr.map((v) => (
                  <Td key={getUniqueKey()}>{v}</Td>
                ))}
              </Tr>
            ))}
          </TBody>
        </Table>
        <Text style={{ marginTop: "15px", marginBottom: "8px" }}>
          Добуток по стовпчикам:
        </Text>
        <Table>
          <TBody>
            <Tr>
              {tdSums.map((v) => (
                <Td key={getUniqueKey()}>{v}</Td>
              ))}
            </Tr>
          </TBody>
        </Table>
      </Container>
    );
  }, [n]);

  return (
    <MainContainer>
      <Comment>
        Згенерувати матрицю розміром NxN. Знайти добуток кожного стовпчику
        матриці. Виокремити стовпчики за допомогою кольору
      </Comment>
      <Container>
        <Input
          placeholder="n.."
          type="text"
          onChange={(e) => setN(validateValue(e.target.value))}
          required
        />
      </Container>
      {resultTable}
    </MainContainer>
  );
}
