import { Component } from '@angular/core';
import { QuestionsService } from './questions.service';
import { FakeLanguageParseServiceService } from './fake-language-parse-service.service';
import { Injectable } from '@angular/core';
import { Question } from './question';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  constructor(
    private questionService: QuestionsService,
    private fakeLanguageService: FakeLanguageParseServiceService // todo - register and resolve as an array of interfaces.
  ) { }

  title = 'Natural Language Tester';
  selectedQuestion: Question;
  count = this.questionService.GetQueries().length;
  questions = this.questionService.GetQueries();
  questionText: string;
  resultText: string;

  setQuestion(): void {
    this.questionText = this.selectedQuestion.question;
    this.processNaturalLanguage();
  }

  processNaturalLanguage() {
    this.fakeLanguageService.parseText(this.questionText).then(x => {
      this.resultText = x.resultJSON;
    });
  }

}
