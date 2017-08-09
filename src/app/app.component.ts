import { Component } from '@angular/core';
import { QuestionsService } from './questions.service';
import { FakeLanguageParseServiceService } from './fake-language-parse-service.service';
import { LUISLanguageParseService } from './luislanguage-parse.service';
import { Injectable } from '@angular/core';
import { Question } from './question';
import { Transition, Ng2StateDeclaration, UIView } from '@uirouter/angular';
import * as r from '@uirouter/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  constructor() {
  }
}
