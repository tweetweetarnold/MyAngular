import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './author.component';
import {HeartComponent} from './heart.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <!--<i class="glyphicon glyphicon-star"></i>-->
    <!-- <i
        class="glyphicon"
        [class.glyphicon-star-empty]="!isFavorite"
        [class.glyphicon-star]="isFavorite" 
        (click)="onClick()">
    </i> -->
    <button class="btn btn-primary" [class.active] ="isFavourite" [class.inactive]="!isFavourite" (click)="onClick()" >Submit</button> {{isFavourite}}
    <courses></courses>
    <authors></authors>
    <heart></heart>

    `,
    directives: [CoursesComponent, AuthorComponent, HeartComponent]
})
export class AppComponent { 
    @Input() isFavourite = false;

    @Output() change = new EventEmitter();

    onClick(){
        // console.log("registered onclick");
        this.isFavourite = !this.isFavourite;
        this.change.emit({newValue: this.isFavourite});
    }
}