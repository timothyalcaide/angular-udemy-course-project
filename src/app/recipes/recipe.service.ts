import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Shnitzel',
      'A super tasty Schnitzel, just awesome !',
      'https://picsum.photos/id/1/200',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Biggy Fat burger',
      'What else ?',
      'https://picsum.photos/id/2/200',
      [new Ingredient('Meat', 1), new Ingredient('Buns', 2)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
