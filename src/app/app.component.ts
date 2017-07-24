import { Component } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  constructor(private questionService: QuestionsService) { }

  title = 'Natural Language Tester';
  count = this.questionService.GetQueries().length;
  questions = this.questionService.GetQueries();
}
