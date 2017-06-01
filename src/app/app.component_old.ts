import { Component, OnInit } from '@angular/core';
import { Imdb } from './imdb-va';
import { DrupalService } from './hero.service';
import 'rxjs/Rx';


@Component({
  selector: 'my-app',
  template: `
    <header></header>
    <div class="container">
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
    <ng-footer></ng-footer>
  `,
  providers: [
    DrupalService
  ]
})
export class AppComponent {
  // search = new Control();
  // results = {};
  // constructor(public youtube:YouTubeAPI) {
  //
  //  //observable of results
  //  this.results =
  //  //input value change observable
  //   this.search.valueChanges
  //     .debounceTime(200) //debounce for 200ms
  //     .switchMap(query => youtube.search(query));
  // }
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
