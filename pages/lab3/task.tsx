import UserBlock from "../../components/UserBlock";
import {
  Button,
  Comment,
  Container,
  MainContainer,
} from "../../styles/pageStyles";
import { useState } from "react";
import { faker } from "@faker-js/faker";

export default function Task() {
  const [data, setData] = useState<any[]>([]);

  const uploadData = () => {
    const list: any[] = new Array();
    const dateList: any[] = [];
    for (let i = 0; i < 20; i++) {
      const student: {
        key: string;
        name: string;
        phone: string;
        date: Date;
        address: { street: string; city: string; state: string };
        color: boolean;
      } = {
        key: faker.random.numeric(10),
        name: faker.name.fullName(),
        phone: faker.phone.number("(096)-###-####"),
        date: faker.date.between(
          "2023-01-05T00:00:00.000Z",
          "2023-18-05T00:00:00.000Z"
        ),
        address: {
          street: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
        },
        color: false,
      };

      dateList.push(student.date.toLocaleString().slice(0, 10));
      list.push(student);
    }

    const duplicatedDate = dateList.filter(
      (it, index) => index !== dateList.indexOf((it = it.trim()))
    );

    for (let i = 0; i < list.length; i++) {
      if (duplicatedDate.includes(list[i].date.toLocaleString().slice(0, 10))) {
        list[i].color = true;
      }
    }

    setData(list);
  };

  return (
    <MainContainer>
      <Comment>
        Необхідно додати у розроблений в попередній лабораторній роботі
        застосунок сторінку для обробки JSON файлу отриманого з серверу.
        Сторінку викликати у головному меню застосунку.
        <br />
        <br />- ПІБ студента.
        <br />- Дата народження.
        <br />- Адреса.
        <br />- Телефон.
        <br />
        Запит. Позначити кольором студентів, що мають однакову дату народження.
      </Comment>
      <Container>
        <Button onClick={uploadData}>Завантажити</Button>
      </Container>
      {data.map((el) => (
        <UserBlock
          key={el.key}
          name={el.name}
          date={el.date}
          phone={el.phone}
          address={el.address}
          color={el.color}
        />
      ))}
    </MainContainer>
  );
}
