import { Component } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Injectable } from '@angular/core';
import { Question } from './question';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  constructor(private questionService: QuestionsService) { }

  title = 'Natural Language Tester';
  selectedQuestion: Question;
  count = this.questionService.GetQueries().length;
  questions = this.questionService.GetQueries();
  questionText: string;

  setQuestion(): void {
    this.questionText = this.selectedQuestion.question;
  }
}
