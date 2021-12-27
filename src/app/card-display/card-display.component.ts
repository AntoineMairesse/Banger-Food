import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../entities/Category";

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {
  @Input() collection: Category[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
