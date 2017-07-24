import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../Question';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class QuestionsModule {
  GetQueries(): Question[] {
    return [
      Question.Create(1, 'Navigate to POS'),
      Question.Create(2, 'Navigate to Home'),
      Question.Create(3, 'Navigate to Back'),
      Question.Create(4, 'Navigate to Front'),
      Question.Create(5, 'Navigate to Door'),
      Question.Create(5, 'Navigate to Chicken')
    ];
  }
}
