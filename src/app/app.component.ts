import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent],
  template: ` <jhd-main /> `,
  styles: [
    `
      :host {
        max-width: 1280px;
        text-align: center;
      }

      nav {
        text-align: left;
        padding: 0 0 2rem 0;
      }
    `,
  ],
})
export class AppComponent {}
