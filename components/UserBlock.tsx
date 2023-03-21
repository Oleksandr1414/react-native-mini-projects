import { Text } from "react-native";
import { Container } from "../styles/pageStyles";

export default function UserBlock({
  name,
  phone,
  date,
  address,
  color,
}: {
  name: string;
  phone: string;
  date: Date;
  address: { state: string; city: string; street: string };
  color: boolean;
}) {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        backgroundColor: color ? "#a4a4ff" : "#fff",
      }}
    >
      <Text>{name}</Text>
      <Text>{date.toLocaleString().slice(0, 10)}</Text>
      <Text>{phone}</Text>
      <Text>{address.state + "" + address.city + " " + address.street}</Text>
    </Container>
  );
}
