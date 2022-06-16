import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Jonnes',
        lastName: 'Santos',
        age: 32
      },
      {
        firstName: 'Daianne',
        lastName: 'Silva',
        age: 28
      },
      {
        firstName: 'Alíia',
        lastName: 'Santos',
        age: 9
      },
      {
        firstName: 'Luna',
        lastName: 'Haas',
        age: 1
      },
    ]

    return of(peopleArray)
  }
}
