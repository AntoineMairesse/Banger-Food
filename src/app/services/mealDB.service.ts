import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Category} from "../entities/Category";

@Injectable({providedIn: 'root'})
export class MealDBService {
  categories: Category[] = [];

  constructor(private http: HttpClient) {

  }

  fetchAllCategories() {
    this.http.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .subscribe({
        next: (value: any) => {
          let test: any;
          for (test in value.categories) {
            this.categories.push(
              new Category(
                value.categories[test].idCategory,
                value.categories[test].strCategory,
                value.categories[test].strCategoryThumb,
                value.categories[test].strCategoryDescription
              )
            );
          }
        }
      });
  }
}
