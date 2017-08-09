import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { QuestionsService } from './questions.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FakeLanguageParseServiceService } from './fake-language-parse-service.service';
import { LUISLanguageParseService } from './luislanguage-parse.service';


import { AppComponent } from './app.component';
import { StaticComponent } from './static/static.component';

import { UIRouterModule } from '@uirouter/angular';
import { UiRoutingModule } from './ui-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StaticComponent
  ],
  imports: [
    BrowserModule,
    UiRoutingModule,
    AlertModule, // .forRoot(),
    HttpModule,
    FormsModule
  ],
  providers: [QuestionsService, FakeLanguageParseServiceService, LUISLanguageParseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
