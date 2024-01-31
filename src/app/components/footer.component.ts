import { Component } from '@angular/core';
import { Icons } from './ui/icons';
import SvgComponent from './ui/svg.component';

@Component({
  selector: 'jhd-footer',
  standalone: true,
  imports: [SvgComponent],
  template: `
    <footer
      class=" inset-x-0 z-50 flex w-full flex-row items-center justify-evenly border-t border-base-300 bg-base-200 px-10 py-4 align-middle text-base-content">
      <aside class="grid grid-flow-col items-center">
        <p>Jason Hodges <br />Angular Engineer</p>
      </aside>
      <nav class="md:place-self-center md:justify-self-end">
        <div class="grid grid-flow-col gap-4">
          <a href="https://twitter.com/_jasonhodges" target="_blank">
            <jhd-svg [class]="'fill-current'" [path]="twitter" />
          </a>
          <a href="https://github.com/jasonhodges" target="_blank">
            <jhd-svg [class]="'fill-current'" [path]="github" />
          </a>
          <a href="https://linkedin.com/in/jasonhodges09" target="_blank">
            <jhd-svg [class]="'fill-current'" [path]="linkedin" />
          </a>
        </div>
      </nav>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {
  twitter = Icons.twitter;
  github = Icons.github;
  linkedin = Icons.linkedin;

  constructor() {
    // this.twitter = Icons.twitter;
  }
}
