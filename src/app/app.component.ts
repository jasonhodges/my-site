import { Component } from '@angular/core';
import { FooterComponent } from './components/footer.component';
import { MainComponent } from './components/main.component';
import { NavComponent } from './components/nav.component';

@Component({
  selector: 'jhd-root',
  standalone: true,
  imports: [MainComponent, NavComponent, FooterComponent],
  template: `
    <jhd-nav />
    <jhd-main />
    <jhd-footer />
  `,
})
export class AppComponent {}
