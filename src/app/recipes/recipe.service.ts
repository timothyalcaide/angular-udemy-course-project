import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { AppModule } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a simply test',
      'https://picsum.photos/id/1/200'
    ),
    new Recipe(
      'An other test recipe',
      'This is a simply test',
      'https://picsum.photos/id/2/200'
    )
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
