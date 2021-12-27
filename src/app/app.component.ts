import {Component, OnInit} from '@angular/core';
import {MealDBService} from "./services/mealDB.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'BangerFoodFront';

  constructor(public mealDB: MealDBService) {
  }

  ngOnInit(): void {
    this.mealDB.fetchAllCategories();
  }

}
