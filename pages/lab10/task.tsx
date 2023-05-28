import PreviousValue from "./classes/PreviousValue";
import React, { useState, useEffect, useMemo } from "react";
import UniversityDictionaryService from "./classes/UniversityDictionaryService";
import ValueList from "./classes/ValueList";
import ValueListManager from "./classes/ValueListManager";
import {
  Button,
  Comment,
  Container,
  Input,
  MainContainer,
} from "../../styles/pageStyles";

export default function Task() {
  const [university, setUniversity] = useState("");
  const [value, setValue] = useState("");
  const universityDictionaryService = new UniversityDictionaryService();
  const valueList = new ValueList();
  const previousValue = new PreviousValue();
  const valueListManager = new ValueListManager();

  const universities = useMemo(() => {
    return universitiesDictionaryService.getUniversities();
  }, []);

  const values = useMemo(() => {
    return valueList.getValues();
  }, []);

  const currentValue = useMemo(() => {
    return previousValue.getValue();
  }, []);

  const objects = useMemo(() => {
    return valueListManager.getObjects();
  }, []);

  useEffect(() => {
    // Підписка на спостереження за довідником університетів
    universityDictionaryService
      .getUniversitiesObservable()
      .subscribe((universities) => {
        // Оновлення стану не потрібне, використовується useMemo
      });

    // Підписка на спостереження за списком значень
    valueList.getValuesObservable().subscribe((values) => {
      // Оновлення стану не потрібне, використовується useMemo
    });

    // Підписка на спостереження за значенням і попереднім значенням
    previousValue.getValueObservable().subscribe((currentValue) => {
      // Оновлення стану не потрібне, використовується useMemo
    });

    // Підписка на спостереження за списком об'єктів
    valueListManager.getValuesObservable().subscribe((objects) => {
      // Оновлення стану не потрібне, використовується useMemo
    });
  }, []);

  const handleAddUniversity = () => {
    universityDictionaryService.addUniversity(university);
  };

  const handleAddValue = () => {
    valueList.addValue(value);
    previousValue.updateValue(value);
    valueListManager.addValue(previousValue);
  };

  return (
    <MainContainer>
      <Comment>
        Завдання по роботі з бібліотекою RxJS:
        <br />
        1. Розробити сервіс для спостерігання за значенням у довіднику, що
        змінюється відповідно до завдання. Довідник необхідно представити у
        вигляді класу.
        <br />
        2. Розробити клас для збереження списку значень, реалізувавши додавання
        нових значень до списку.
        <br />
        3. Розробити клас який пов’язаний з попереднім значенням відповідно до
        завдання. Даний клас повинен мати не менше, аніж 5 полів.
        <br />
        4. Розробити клас для роботи зі списком об’єктів класу вказаного у
        попередньому пункті.
        <br />
        5. У основному застосунку реалізувати можливість додавання нових значень
        у довідник та нових значень для класу описаному у пункті 3.
        <br />
        Варіант: 12. Довідник університетів та список освітніх програм
      </Comment>
      <Container>
        <div>
          <div>
            <h3>Довідник університетів</h3>
            <ul>
              {universities.map((uni) => (
                <li key={uni}>{uni}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Список значень</h3>
            <ul>
              {values.map((val) => (
                <li key={val}>{val}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Поточне значення та попереднє значення</h3>
            <p>Поточне значення: {currentValue}</p>
          </div>

          <div>
            <h3>Список об'єктів</h3>
            <ul>
              {objects.map((obj, index) => (
                <li key={index}>{obj.getValue()}</li>
              ))}
            </ul>
          </div>

          <div>
            <input
              type="text"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            />
            <button onClick={handleAddUniversity}>Додати університет</button>
          </div>

          <div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleAddValue}>Додати значення</button>
          </div>
        </div>
      </Container>
    </MainContainer>
  );
}
