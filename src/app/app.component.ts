import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasks_implementation';
  book = {
    title: "Thief of Time",
    author: "Terry Pratchett",
    description: "A sweeper saves time on the Discworld"
  };
}
