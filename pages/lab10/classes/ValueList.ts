import { BehaviorSubject, Observable } from "rxjs";

export default class ValueList {
  private values: string[] = [];
  private valuesSubject: BehaviorSubject<string[]> = new BehaviorSubject<
    string[]
  >([]);

  // Додавання нового значення до списку
  addValue(value: string) {
    this.values.push(value);
    this.valuesSubject.next(this.values);
  }

  // Отримання спостереження за списком значень
  getValuesObservable(): Observable<string[]> {
    return this.valuesSubject.asObservable();
  }
}
