import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer.component';
import { NavComponent } from './nav.component';

@Component({
  selector: 'jhd-main',
  standalone: true,
  imports: [NavComponent, FooterComponent, RouterOutlet],
  template: `
    <main class="bg-base-100">
      <div class="mx-16">
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
  styles: ``,
})
export class MainComponent {}
