import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasks_implementation';
  books: Book[] = [{
    title: "Thief of Time",
    author: "Terry Pratchett",
    description: "A sweeper saves time on the Discworld"
  }, {
    title: "Salenm's Lot",
    author: "Stephen King",
    description: "Vampires suck blood"
  }, {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    description: "Clueless guy goes on an adventure for good tea"
  }]
  goToBookDetails(book: Book) {
    console.log(book);
  }
}
