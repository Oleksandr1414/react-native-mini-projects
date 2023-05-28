import { BehaviorSubject, Observable } from "rxjs";

export default class PreviousValue {
  private value: string = "";
  private valueSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    ""
  );

  // Оновлення значення і попереднього значення
  updateValue(newValue: string) {
    const previousValue = this.value;
    this.value = newValue;
    this.valueSubject.next(previousValue);
  }

  // Отримання спостереження за значенням і попереднім значенням
  getValueObservable(): Observable<string> {
    return this.valueSubject.asObservable();
  }

  // Отримання поточного значення
  getValue(): string {
    return this.value;
  }
}
