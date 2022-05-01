import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookNa } from '../book-na';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  constructor() { }

  @Input() content: Book = new BookNa;

  ngOnInit(): void {
  }
  handleDetailClick(click: MouseEvent): void {
    click.preventDefault();
    console.log(click);
  }

}
