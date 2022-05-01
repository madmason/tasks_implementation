import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasks_implementation';
  book: Book= {
    title: "Thief of Time",
    author: "Terry Pratchett",
    description: "A sweeper saves time on the Discworld"
  };
}
