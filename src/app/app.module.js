"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var hero_detail_component_1 = require("./header/hero-detail.component");
var heroes_component_1 = require("./imdb/heroes.component");
var youtube_component_1 = require("./youtube/youtube.component");
var footer_component_1 = require("./footer/footer.component");
var router_1 = require("@angular/router");
var api_component_1 = require("./api/api.component");
var hero_form_component_1 = require("./forms/hero-form.component");
var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '/', component: youtube_component_1.YouTubeComponent },
    { path: 'imdb', component: heroes_component_1.HeroesComponent },
    { path: 'api-data', component: api_component_1.ApiComponent },
    { path: 'forms', component: hero_form_component_1.HeroFormComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            router_1.RouterModule.forRoot(routes),
        ],
        exports: [router_1.RouterModule],
        declarations: [
            app_component_1.AppComponent,
            hero_detail_component_1.HeroDetailComponent,
            heroes_component_1.HeroesComponent,
            footer_component_1.FooterComponent,
            youtube_component_1.YouTubeComponent,
            api_component_1.ApiComponent,
            hero_form_component_1.HeroFormComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map