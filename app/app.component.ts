import {Component} from '@angular/core';

@Component({
    moduleId : module.id,
    selector : 'my-app-component',
    templateUrl : 'app.component.html',
    styles:[`.container{}`]
})
export class AppComponent{
    public title : string;
    constructor(){
        this.title = "My App Component";
    }
}