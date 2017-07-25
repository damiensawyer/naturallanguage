import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { QuestionsService } from './questions.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FakeLanguageParseServiceService } from './fake-language-parse-service.service';
import { LUISLanguageParseService } from './luislanguage-parse.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlertModule.forRoot(),
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  providers: [QuestionsService, FakeLanguageParseServiceService, LUISLanguageParseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
