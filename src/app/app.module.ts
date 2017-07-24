import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { QuestionsService } from './questions.service';
import { FormsModule } from '@angular/forms';

import { FakeLanguageParseServiceService } from './fake-language-parse-service.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [QuestionsService, FakeLanguageParseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
