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
      Question.Create(5, 'Are There any bookings for Jones'),
      Question.Create(6, 'Do I have a booking for Anderson'),
      Question.Create(7, 'Is there a home page'),
      Question.Create(8, `Show me a report of today's bookings`),
      Question.Create(9, `Show me bookings for next week`),
      Question.Create(10, `Show me a report of bookings from last year`)
    ];
  }

}
