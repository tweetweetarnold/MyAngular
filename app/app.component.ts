import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './author.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <button class="btn btn-primary" [class.active]="isActive">Submit</button>
    <courses></courses>
    <authors></authors>

<!-- <i class="glyphicon glyphicon-star"></i> -->
    <i
        class="glyphicon" 
        [class.glyphicon-star]="isFavourite" [class.glyhicon-star-empty]="!isFavourite" 
        (click)="onClick()">
    </i>
    `,
    directives: [CoursesComponent, AuthorComponent]
})
export class AppComponent { 
    isFavourite = false;

    onClick(){
        this.isFavourite = !this.isFavourite;
    }
}