import { injectContentFiles } from '@analogjs/content';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import PostAttributes from '../../models/post-attributes';

@Component({
  selector: 'jhd-blog-index',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Blog</h1>
    @for (post of posts; track post.attributes.slug) {
      <a [routerLink]="['/blog/', post.attributes.slug]">
        <h2 class="post__title">{{ post.attributes.title }}</h2>
        <p class="post__desc">{{ post.attributes.description }}</p>
      </a>
    }
  `,
  styles: [
    `
      a {
        text-align: left;
        display: block;
        margin-bottom: 2rem;
      }

      .post__title,
      .post__desc {
        margin: 0;
      }
    `,
  ],
})
export default class BlogIndexPage {
  readonly posts = injectContentFiles<PostAttributes>();
}
