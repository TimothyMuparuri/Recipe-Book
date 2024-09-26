import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appPlacholder]'
})
export class PlaceholderDirective {
    constructor(public viewContainerRef: ViewContainerRef) {

    }
}