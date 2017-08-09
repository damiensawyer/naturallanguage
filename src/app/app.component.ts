import { Component } from '@angular/core';
import { QuestionsService } from './questions.service';
import { FakeLanguageParseServiceService } from './fake-language-parse-service.service';
import { LUISLanguageParseService } from './luislanguage-parse.service';
import { Injectable } from '@angular/core';
import { Question } from './question';
import { Transition, Ng2StateDeclaration } from '@uirouter/angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
    static RouteStates = <Ng2StateDeclaration[]>[{
        name: 'app',
        url: '/app',
        component: AppComponent,
        resolve: [
          {
                token: 'home',
                deps: [Transition],
                resolveFn: () => {}
            }
        ]
    }];

  constructor(
    private questionService: QuestionsService,
    private fakeLanguageService: FakeLanguageParseServiceService, // todo - register and resolve as an array of interfaces.
    private luisLanguageParseService: LUISLanguageParseService
  ) {
    this.textChanged();
  }
  activeLanguageService = this.luisLanguageParseService;
  title = 'Natural Language Tester';
  selectedQuestion: Question;
  count = this.questionService.GetQueries().length;
  questions = this.questionService.GetQueries();
  questionText: string;
  resultText: string;

  setQuestion(): void {
    this.questionText = this.selectedQuestion.question;
    this.textChanged();
  }

  textChanged(): void {
    this.resultText = 'Execute query to see results';
  }

  executeQuery(questionText: string): void {
    this.resultText = 'Executing query....';
    this.activeLanguageService.parseText(this.questionText)
      .then(x => {
        this.resultText = x.resultJSON;
      })
      .catch(reason => { this.resultText = `ERROR - ${reason}`; });
  }
}
