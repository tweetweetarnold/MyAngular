
import {Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
    hello!!
    <button class="btn btn-primary">meow</button>
    <div class="glyphicon glyphicon-search"></div>
    <div class="zippy">
        <div class="title" (click)="toggle()">
            {{title}}

            <i class="pull-right glyphicon" class="fa fa-chevron-down" >
            
            </i>
        </div>
    
    </div>
    `
})
export class ZippyComponent{
    isExpanded = false;
    @Input() title:String;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }

}