"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var imdb_1 = require("./imdb");
var DrupalService = (function () {
    function DrupalService() {
    }
    DrupalService.prototype.getUser = function () {
        return Promise.resolve(imdb_1.IMDBS);
    };
    return DrupalService;
}());
DrupalService = __decorate([
    core_1.Injectable()
], DrupalService);
exports.DrupalService = DrupalService;
// @Injectable()
// export class DrupalService {
//   constructor(private http: Http) {}
//   getUser() {
//     return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
//     .map((res:Response) => res.json());
//   }
//
// }
//# sourceMappingURL=hero.service.js.map