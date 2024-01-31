import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { Paths } from '../models/paths';
import { ThemeControllerComponent } from './ui/theme-controller.component';

@Component({
  selector: 'jhd-nav',
  standalone: true,
  imports: [ThemeControllerComponent, RouterLink],
  template: `
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown" #dropdownButton>
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost lg:hidden"
            (click)="toggleDropdown(dropdownButton)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu dropdown-content menu-sm z-[75] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
            @for (path of paths; track path) {
              <li>
                <a
                  href="{{ path.path }}"
                  [class.active]="activeLink === path.path"
                  (click)="linkClick($event, dropdownButton, path.path)"
                  >{{ path.name }}</a
                >
              </li>
            }
          </ul>
        </div>
        <a class="btn btn-ghost text-xl" routerLink="/">JasonHodges.dev</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          @for (path of paths; track path) {
            <li>
              <a
                routerLink="{{ path.path }}"
                routerLinkActive="active"
                ariaCurrentWhenActive="page"
                >{{ path.name }}</a
              >
            </li>
          }
        </ul>
      </div>
      <div class="navbar-end pe-4">
        <jhd-theme-controller />
      </div>
    </div>
  `,
})
export class NavComponent {
  paths = Paths;
  activeLink = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.activeLink = event.urlAfterRedirects;
      });
  }

  toggleDropdown(button: HTMLDivElement) {
    button.classList.toggle('dropdown-open');
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  linkClick(event: Event, parent: HTMLDivElement, route: string) {
    event.preventDefault();
    this.toggleDropdown(parent);
    this.router.navigate([route]);
  }
}
