import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <header></header>
  <router-outlet></router-outlet>
  <ng-footer></ng-footer>
  `,
})

export class AppComponent {}  
