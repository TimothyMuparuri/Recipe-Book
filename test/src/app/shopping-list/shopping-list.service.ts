import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
      ingredientsChanged = new Subject<Ingredient[]>
      startedEditing = new Subject<number>();
      private ingredients: Ingredient[] = [
        new Ingredient('tomatoes',5),
        new Ingredient('flour',5)
      ];

      getIngredient(index: number){
        return this.ingredients[index];
      }

      getALLIngredients(){
        return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
         this.ingredients.push(ingredient);
         this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
        //this one uses the original array
        // for (let ingredient of ingredients){
        //     this.addIngredient(ingredient)
        // }

        // this one uses a copy of the array with slice
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.next(this.ingredients.slice())
      }

      updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

}