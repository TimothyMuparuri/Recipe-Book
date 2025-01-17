import { NgModule } from "@angular/core";

import { RecipeService } from './recipes/recipes.service';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AuthInterceptorService } from './auth/auth/auth-inteceptor.service';

@NgModule({
    providers: [
            ShoppingListService,
            RecipeService, 
            {provide: HTTP_INTERCEPTORS, 
                useClass: AuthInterceptorService, 
                multi: true}]
    
})
export class CoreModule{}