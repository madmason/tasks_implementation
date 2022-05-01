import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  constructor() { }

  @Input() content: any;

  ngOnInit(): void {
  }
  handleDetailClick(click: MouseEvent): void {
    click.preventDefault();
    console.log(click);
  }
  
  customStyle = {
    color: 'turquoise'
  };

}
