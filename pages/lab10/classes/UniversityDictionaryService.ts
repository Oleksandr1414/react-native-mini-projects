import { Observable, Subject } from "rxjs";

export default class UniversityDictionaryService {
  private universities: string[] = [];
  private universitiesSubject: Subject<string[]> = new Subject<string[]>();

  constructor() {
    // Підписка на зміни у довіднику
    this.universitiesSubject.subscribe((universities) => {
      console.log("Університети оновлені:", universities);
    });
  }

  // Додавання нового університету до довідника
  addUniversity(university: string) {
    this.universities.push(university);
    this.universitiesSubject.next(this.universities);
  }

  // Отримання спостереження за довідником університетів
  getUniversitiesObservable(): Observable<string[]> {
    return this.universitiesSubject.asObservable();
  }
}
