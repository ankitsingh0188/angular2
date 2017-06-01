"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
require("rxjs/Rx");
var AppComponent = (function () {
    function AppComponent(drupalService) {
        this.drupalService = drupalService;
    }
    AppComponent.prototype.getUser = function () {
        var _this = this;
        this.drupalService.getUser().then(function (imdb) { return _this.imdb = imdb; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <header></header>\n    <div class=\"container\">\n      <section>\n        <div class=\"row\">\n          <div class=\"col-md-3\" *ngFor=\"let hero of imdb\">\n            <div class=\"thumbnail\">\n              <img src=\"{{ hero.Poster }}\" alt=\"...\">\n              <div class=\"caption\">\n                <h3>{{ hero.Title }}</h3>\n                <p>{{ hero.Year }}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n    <ng-footer></ng-footer>\n  ",
        providers: [
            hero_service_1.DrupalService
        ]
    }),
    __metadata("design:paramtypes", [hero_service_1.DrupalService])
], AppComponent);
exports.AppComponent = AppComponent;
// <button [hidden]="assessment" (click)="loadUser()" class="btn btn-primary">Load profile</button>
//# sourceMappingURL=app.component_old.js.map