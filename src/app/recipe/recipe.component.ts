import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe = RECIPES;

// show-hide edit
selectedRecipe = null;

  finishedEditing() {
  this.selectedRecipe = null;
}

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

// show-hide recipe details
selectedDetails = null;

  closeDetails() {
  this.selectedDetails = null;
}

  showDetails(clickedName) {
    this.selectedDetails = clickedName;
  }

  ratingColor(list){
    if (list.rating === "3") {
      return "best";
    } else if (list.rating === "2") {
      return "good";
    } else {
      return "okay";
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
