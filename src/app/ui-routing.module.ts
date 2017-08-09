import { NaturalLanguageTestComponent } from './natural-language-test/natural-language-test.component';
import { NgModule } from '@angular/core';
import { UIRouterModule, Transition, Ng2StateDeclaration } from '@uirouter/angular';
import { StaticComponent } from './static/static.component';
import { AppComponent } from './app.component';
import * as config from './router.config';

/* Read the tutes https://ui-router.github.io/ng2/tutorial/hellosolarsystem */
@NgModule({
    imports: [
        UIRouterModule.forRoot({
            config: config.uiRouterConfigFn,
            /** I wanted to have RouteStates on an interface, however you can't have statics on interfaces
             * so it was either this or instatiating components which is silly.
             */
            states: <Ng2StateDeclaration[]>
            NaturalLanguageTestComponent.RouteStates
                .concat(StaticComponent.RouteStates),
            useHash: true
        })
    ]
})
export class UiRoutingModule { }
