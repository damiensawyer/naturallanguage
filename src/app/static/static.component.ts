import { Component, OnInit } from '@angular/core';
import { Transition, Ng2StateDeclaration } from '@uirouter/angular';


@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css']
})
export class StaticComponent implements OnInit {
    static RouteStates = <Ng2StateDeclaration[]>[{
        name: 'static',
        url: '/static',
        component: StaticComponent,
        resolve: [// get data that will load before the component is displayed.
          {
                token: 'static',
                deps: [Transition],
                resolveFn: () => {}
            }
        ]
    }];

  constructor() { }

  ngOnInit() {
  }

}
