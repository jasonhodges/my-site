import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeControllerComponent } from './ui/theme-controller.component';

@Component({
  selector: 'jhd-nav',
  standalone: true,
  imports: [ThemeControllerComponent, RouterLink],
  template: `
    <div class="navbar inset-x-0 top-0 min-w-full justify-between bg-base-200">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-circle btn-ghost">
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
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
            <li>
              <a
                routerLink="/home"
                routerLinkActive="active"
                ariaCurrentWhenActive="page"
                >Home</a
              >
            </li>
            <li>
              <a
                routerLink="/blog"
                routerLinkActive="active"
                ariaCurrentWhenActive="page"
                >Blog</a
              >
            </li>
            <li>
              <a
                routerLink="/about"
                routerLinkActive="active"
                ariaCurrentWhenActive="page"
                >About</a
              >
            </li>
          </ul>
        </div>
      </div>
      <a class="btn btn-ghost text-xl">Jason Hodges.dev</a>
      <jhd-theme-controller />
    </div>
  `,
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
