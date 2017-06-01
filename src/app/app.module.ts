import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }  from './heroes.component';
import { YouTubeComponent }  from './youtube.component';
import { FooterComponent }  from './footer.component';
import { RouterModule, Routes }   from '@angular/router';
import { ApiComponent }   from './api.component';

const routes: Routes = [
  { path: '', redirectTo: '/youtube', pathMatch: 'full' },
  { path: 'youtube',     component: YouTubeComponent },
  { path: 'imdb',     component: HeroesComponent },
  { path: 'api-data',     component: ApiComponent }
];

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
   ],
  exports: [ RouterModule ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    FooterComponent,
    YouTubeComponent,
    ApiComponent
   ],
  bootstrap:    [
    AppComponent
   ]
})
export class AppModule { }
