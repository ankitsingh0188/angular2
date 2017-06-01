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
var search_service_1 = require("./search.service");
var Subject_1 = require("rxjs/Subject");
require("rxjs/Rx");
var YouTubeComponent = (function () {
    function YouTubeComponent(searchService) {
        var _this = this;
        this.searchService = searchService;
        this.searchTerm = new Subject_1.Subject();
        this.searchService.search(this.searchTerm)
            .subscribe(function (results) {
            _this.results = results.items;
        });
    }
    return YouTubeComponent;
}());
YouTubeComponent = __decorate([
    core_1.Component({
        selector: 'youtube-app',
        template: "\n    <div class=\"container\">\n    <section>\n      <input (keyup)=\"searchTerm.next($event.target.value)\">\n      <div class=\"row\" *ngIf=\"results\">\n        <div class=\"col-md-3\" *ngFor=\"let video of results\">\n          <div class=\"thumbnail\">\n            <img [src]=\"video.snippet.thumbnails.default.url\" alt=\"...\">\n            <div class=\"caption\">\n              <h3>{{ video.snippet.title }}</h3>\n              <p>{{ video.snippet.title }}</p>\n            </div>\n          </div>\n        </div>\n        </div>\n      </section>\n    </div>\n    <div class=\"row\" *ngIf=\"!results\">\n      <imdb-app></imdb-app>\n    </div>\n  ",
        providers: [search_service_1.SearchService]
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService])
], YouTubeComponent);
exports.YouTubeComponent = YouTubeComponent;
//# sourceMappingURL=youtube.js.map