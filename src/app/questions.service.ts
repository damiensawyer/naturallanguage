import { Injectable } from '@angular/core';
import { Question } from './Question';
@Injectable()
export class QuestionsService {

  constructor() { }

  GetQueries(): Question[] {
    return [
      Question.Create(1, 'Navigate to POS'),
      Question.Create(2, 'Navigate to Home'),
      Question.Create(3, 'Navigate to Back'),
      Question.Create(4, 'Are There any bookings for Jones'),
      Question.Create(5, `Show me a report of today's bookings`)
    ];
  }

}
