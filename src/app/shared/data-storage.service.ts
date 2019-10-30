import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  URL_API = 'https://ng-course-recipe-book-tabmo.firebaseio.com/';
  constructor(private http: HttpClient, private recipeService: RecipeService) {}
  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(this.URL_API + 'recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }
}
