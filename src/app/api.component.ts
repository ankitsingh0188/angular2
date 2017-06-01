import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'api-app',
  template: `
  <div class="container" *ngIf="results">
    <a href="https://alligator.io/angular/real-time-search-angular-rxjs/" target="_blank"> Search Link </a>
    <section>
      <div class="row">
        <div class="col-md-3">
          <div class="thumbnail">
            <img src="{{ results.image }}" alt="...">
            <div class="caption">
              <h3>{{ results.username }}</h3>
              <p>{{ results.bio }}</p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  `,
  providers: [
    ApiService
  ]
})
export class ApiComponent {
  constructor(private apiService: ApiService) {}
  results: Object

  ngOnInit() {
    this.apiService.getUser().subscribe(results => {
      this.results = results.profile;
    });
  }
}
// <button [hidden]="assessment" (click)="loadUser()" class="btn btn-primary">Load profile</button>
