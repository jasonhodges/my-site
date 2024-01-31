import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export const routeMeta: RouteMeta = {
  title: 'Jason Hodges - Blog Posts',
  meta: [{ name: 'description', content: 'Blog Posts' }],
};
@Component({
  selector: 'jhd-blog-page',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
})
export default class BlogPage {}
