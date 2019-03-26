import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  // recipe: Recipe = {
  //   name: 'Chocolate Milk',
  //   ingredients: ['8oz milk', '2tbsp chocolate sauce'],
  //   instructions: 'Stir chocolate sauce into cold milk until thoroughly mixed. Drink and enjoy.'
  // };

  recipe = RECIPES;
  // console.log(recipe);



  // firstRecipe: Recipe = new Recipe('Chocolate Milk', ['8oz milk', '2tbsp chocolate sauce'], 'Stir chocolate sauce into cold milk until thoroughly mixed. Drink and enjoy.');

  // constructor(public name: string, public ingredients: [string], public instructions: string) { }

  ngOnInit() {
// recipe: Recipe[] = [];
//   recipe.push(new Recipe('Chocolate Milk', ['8oz milk', '2tbsp chocolate sauce'], 'Stir chocolate sauce into cold milk until thoroughly mixed. Drink and enjoy.'));

  }
}
