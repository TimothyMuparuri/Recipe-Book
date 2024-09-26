import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[]= [ 
    //     new Recipe('pizza',
    //                "mike's home made pizza",
    //                'https://www.allrecipes.com/thmb/ooZbu_yUBrGQ74uKbuOENWuNxMM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg', 
    //                [new Ingredient('meat',1),
    //                 new Ingredient('mushroom',3)]),
    //     new Recipe('cake',
    //                 "handle the heart, tessa arias",
    //                 'https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-768x768.jpg',
    //                 [new Ingredient('flour',4)]),
        
    //   ];

      private recipes: Recipe[] = []; 

      constructor(private slService: ShoppingListService){

      }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice();
    }  

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIndredientToShoppingList(ingredients: Ingredient[]){
       this.slService.addIngredients(ingredients);

    }

    addRecipe(recipe: Recipe){
     this.recipes.push(recipe);
     this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe){
      this.recipes[index]= recipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());

    }

}