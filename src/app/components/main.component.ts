import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer.component';
import { NavComponent } from './nav.component';

@Component({
  selector: 'jhd-main',
  standalone: true,
  imports: [NavComponent, FooterComponent, RouterOutlet],
  template: `
    <div class="flex h-screen flex-col overflow-hidden">
      <jhd-nav />
      <main class="flex-1 overflow-y-scroll bg-base-100">
        <div class="mx-16">
          <router-outlet></router-outlet>
        </div>
      </main>
      <jhd-footer />
    </div>
  `,
  styles: ``,
})
export class MainComponent {}
