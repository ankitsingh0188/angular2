"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// import { Hero } from './hero';
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'ng-footer',
        templateUrl: './footer.html',
        styles: ["\n    .footer {\n      width: 100%;\n      /* Set the fixed height of the footer here */\n      height: 60px;\n      line-height: 60px; /* Vertically center the text there */\n      background-color: #f5f5f5;\n    }\n  "],
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;
// @Input() hero: Hero;
//# sourceMappingURL=footer.component.js.map