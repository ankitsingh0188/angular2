import { Component } from '@angular/core';
import { Imdb } from './imdb-va';
import { DrupalService } from './hero.service';

@Component({
  selector: 'imdb-app',
  template: `
  <div class="container" *ngIf="imdb">
    <a href="https://alligator.io/angular/real-time-search-angular-rxjs/" target="_blank"> Search Link </a>
    <section>
      <div class="row">
        <div class="col-md-3" *ngFor="let hero of imdb">
          <div class="thumbnail">
            <img src="{{ hero.Poster }}" alt="...">
            <div class="caption">
              <h3>{{ hero.Title }}</h3>
              <p>{{ hero.Year }}</p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  `,
  providers: [
    DrupalService
  ]
})
export class HeroesComponent {

  imdb: Imdb[];
  constructor(private drupalService: DrupalService) {}

  getUser(): void {
    this.drupalService.getUser().then(imdb => this.imdb = imdb);
  }

  ngOnInit(): void {
    this.getUser();
  }

  // ngOnInit() {
  //   this.drupalService.getUser().subscribe(data => this.assessment = data);
  // }
}
// <button [hidden]="assessment" (click)="loadUser()" class="btn btn-primary">Load profile</button>
