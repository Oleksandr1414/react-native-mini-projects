import { BehaviorSubject, Observable } from "rxjs";
import PreviousValue from "./PreviousValue";

export default class ValueListManager {
  private values: PreviousValue[] = [];
  private valuesSubject: BehaviorSubject<PreviousValue[]> = new BehaviorSubject<
    PreviousValue[]
  >([]);

  // Додавання нового об'єкту до списку
  addValue(value: PreviousValue) {
    this.values.push(value);
    this.valuesSubject.next(this.values);
  }

  // Отримання спостереження за списком об'єктів
  getValuesObservable(): Observable<PreviousValue[]> {
    return this.valuesSubject.asObservable();
  }
}
