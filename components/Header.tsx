import styled from "styled-components";

const Container = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const MainText = styled.p`
  margin: 4px 0;
  font-size: 22px;
`;

const SecondText = styled.p`
  margin: 26px 0 0 0;
  font-size: 24px;
  font-weight: 600;
`;

export default function Header({ n }: { n: number }) {
  return (
    <Container>
      <MainText style={{ fontSize: "28px" }}>Лабораторна робота №1</MainText>
      <MainText>Виконав: Чабанюк Олександр КН-32</MainText>
      <SecondText>Завдання №{n}</SecondText>
    </Container>
  );
}
