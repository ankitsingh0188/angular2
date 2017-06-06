import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { HeroDetailComponent }  from './header/hero-detail.component';
import { HeroesComponent }  from './imdb/heroes.component';
import { YouTubeComponent }  from './youtube/youtube.component';
import { FooterComponent }  from './footer/footer.component';
import { RouterModule, Routes }   from '@angular/router';
import { ApiComponent }   from './api/api.component';
import { HeroFormComponent }   from './forms/hero-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '/',     component: YouTubeComponent },
  { path: 'imdb',     component: HeroesComponent },
  { path: 'api-data',     component: ApiComponent },
  { path: 'forms',     component: HeroFormComponent }
];

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes),
   ],
  exports: [ RouterModule ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    FooterComponent,
    YouTubeComponent,
    ApiComponent,
    HeroFormComponent
   ],
  bootstrap:    [
    AppComponent
   ]
})
export class AppModule { }
