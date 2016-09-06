
import {Component} from 'angular2/core';

@Component({
    selector: 'heart',
    template: `
    <i class="glyphicon glyphicon-heart" (click)="addCount()"></i>
    {{count}}
    `,
    styles: [`
        .glyhicon-heart{
            color:deeppink,
            cursor: pointer
        }
    `]
})
export class HeartComponent{
    count = 10;
    addOne = false;

    addCount(){
        this.addOne = !this.addOne;
        if(this.addOne){
            this.count++;
        }else{
            this.count--;
        }
    }
}