System.register(['angular2/core', './courses.component', './author.component', './heart.component', './zippy.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, author_component_1, heart_component_1, zippy_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.isFavourite = false;
                    this.change = new core_1.EventEmitter();
                }
                AppComponent.prototype.onClick = function () {
                    // console.log("registered onclick");
                    this.isFavourite = !this.isFavourite;
                    this.change.emit({ newValue: this.isFavourite });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AppComponent.prototype, "isFavourite", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], AppComponent.prototype, "change", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [courses_component_1.CoursesComponent, author_component_1.AuthorComponent, heart_component_1.HeartComponent, zippy_component_1.ZippyComponent],
                        template: "\n    <h1>My First Angular 2 App</h1>\n    <!--<i class=\"glyphicon glyphicon-star\"></i>-->\n    <i\n        class=\"glyphicon\"\n        [class.glyphicon-star-empty]=\"!isFavorite\"\n        [class.glyphicon-star]=\"isFavorite\" \n        (click)=\"onClick()\">\n    </i> \n    <button class=\"btn btn-primary\" [class.active] =\"isFavourite\" [class.inactive]=\"!isFavourite\" (click)=\"onClick()\" >Submit</button> {{isFavourite}}\n    <courses></courses>\n    <authors></authors>\n    <heart></heart>\n\n    <br>\n    <zippy></zippy>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map