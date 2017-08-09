import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { QuestionsService } from './services/questions.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FakeLanguageParseServiceService } from './services/fake-language-parse-service.service';
import { LUISLanguageParseService } from './services/luislanguage-parse.service';


import { AppComponent } from './app.component';
import { StaticComponent } from './components/static/static.component';

import { UIRouterModule } from '@uirouter/angular';
import { UiRoutingModule } from './ui-routing.module';
import { NaturalLanguageTestComponent } from './components/natural-language-test/natural-language-test.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticComponent,
    NaturalLanguageTestComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule,
    UiRoutingModule,
    AlertModule,
    HttpModule,
    FormsModule
  ],
  providers: [QuestionsService, FakeLanguageParseServiceService, LUISLanguageParseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
