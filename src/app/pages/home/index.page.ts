import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';

export const routeMeta: RouteMeta = {
  title: 'Jason Hodges - Home',
};
@Component({
  selector: 'jhd-home-index-page',
  standalone: true,
  template: `
    <section>
      <h1>Home</h1>
    </section>
  `,
})
export default class HomeIndexPage {}
