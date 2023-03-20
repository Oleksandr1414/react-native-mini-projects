import styled from "styled-components";

const Container = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const SecondText = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
`;

export default function Header({ n }: { n: number }) {
  return (
    <Container>
      <SecondText>Завдання №{n}</SecondText>
    </Container>
  );
}
