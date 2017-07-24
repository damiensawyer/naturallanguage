import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}


export class Functions {
  GetQueries(): string[] {
    return [
      'navigate to home',
      'are there any bookings for smith'
    ];
  }
}
