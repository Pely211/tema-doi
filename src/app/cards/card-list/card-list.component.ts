import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cardContentList = ['Card 1', 'Card 2', 'Card 3'];



  constructor() { }

  ngOnInit(): void { }

  addCard(): void {
    this.cardContentList.push(`Card ${this.cardContentList.length + 1}`);

  }
}
