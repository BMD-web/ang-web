import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <main>
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bmd-full';
  
}
