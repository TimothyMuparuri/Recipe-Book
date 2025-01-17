import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { RecipeService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipe.model";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
   
    constructor(private http: HttpClient,
                private recipeService: RecipeService,
                private authService: AuthService){}
    
    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://project-recipe-book-5ef2f-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe( response=> {
            console.log(response);
            
        })

    }

    fetchRecipes(){
    return this.http
    .get<Recipe []>('https://project-recipe-book-5ef2f-default-rtdb.firebaseio.com/recipes.json'
      ).pipe(
        map(recipes => {
            return recipes.map(recipe => {
                return {
                    ...recipe,
                    ingredients: recipe.ingredients ? recipe.ingredients: []
                };
            });
        }),
        tap(recipes => {
            this.recipeService.setRecipes(recipes);
        })
        );
        // .subscribe(recipes =>{
        //     this.recipeService.setRecipes(recipes);
        //     // console.log(recipes);
            
            
        // })
    }

}