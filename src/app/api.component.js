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
var api_service_1 = require("./api.service");
var ApiComponent = (function () {
    function ApiComponent(apiService) {
        this.apiService = apiService;
    }
    ApiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getUser().subscribe(function (results) {
            _this.results = results.profile;
        });
    };
    return ApiComponent;
}());
ApiComponent = __decorate([
    core_1.Component({
        selector: 'api-app',
        template: "\n  <div class=\"container\" *ngIf=\"results\">\n    <a href=\"https://alligator.io/angular/real-time-search-angular-rxjs/\" target=\"_blank\"> Search Link </a>\n    <section>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"thumbnail\">\n            <img src=\"{{ results.image }}\" alt=\"...\">\n            <div class=\"caption\">\n              <h3>{{ results.username }}</h3>\n              <p>{{ results.bio }}</p>\n            </div>\n          </div>\n        </div>\n        </div>\n      </section>\n    </div>\n  ",
        providers: [
            api_service_1.ApiService
        ]
    }),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], ApiComponent);
exports.ApiComponent = ApiComponent;
// <button [hidden]="assessment" (click)="loadUser()" class="btn btn-primary">Load profile</button>
//# sourceMappingURL=api.component.js.map