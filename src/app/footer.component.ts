import { Component, Input } from '@angular/core';
// import { Hero } from './hero';
@Component({
  selector: 'ng-footer',
  templateUrl: './footer.html',
  styles: [`
    .footer {
      width: 100%;
      /* Set the fixed height of the footer here */
      height: 60px;
      line-height: 60px; /* Vertically center the text there */
      background-color: #f5f5f5;
    }
  `],
})
export class FooterComponent {}
  // @Input() hero: Hero;
