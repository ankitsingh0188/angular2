import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';

import 'rxjs/Rx';

@Component({
  selector: 'youtube-app',
  template: `
  <div id="wrap">
    <div class="container">
      <section>
        <input (keyup)="searchTerm.next($event.target.value)">
        <div class="row" *ngIf="results">
          <div class="col-md-3" *ngFor="let video of results">
            <div class="thumbnail">
              <img [src]="video.snippet.thumbnails.default.url" alt="...">
              <div class="caption">
                <h3>{{ video.snippet.title }}</h3>
                <p>{{ video.snippet.title }}</p>
              </div>
            </div>
          </div>
          </div>
        </section>
    </div>
  </div>
  `,
  providers: [SearchService]
})

export class YouTubeComponent {
  results: Object;
  searchTerm = new Subject<string>();

  constructor(public searchService: SearchService) {
    this.searchService.search(this.searchTerm)
      .subscribe(results => {
        this.results = results.items;
      });
    }
}
