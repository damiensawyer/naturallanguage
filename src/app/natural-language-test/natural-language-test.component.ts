import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './../questions.service';
import { FakeLanguageParseServiceService } from './../fake-language-parse-service.service';
import { LUISLanguageParseService } from './../luislanguage-parse.service';
import { Injectable } from '@angular/core';
import { Question } from './../question';
import { Transition, Ng2StateDeclaration } from '@uirouter/angular';

@Component({
  selector: 'app-natural-language-test',
  templateUrl: './natural-language-test.component.html',
  styleUrls: ['./natural-language-test.component.css']
})
export class NaturalLanguageTestComponent implements OnInit {
  static RouteStates = <Ng2StateDeclaration[]>[{
    name: 'nlt',
    url: '/nlt',
    component: NaturalLanguageTestComponent
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
  ngOnInit() {
  }

}
