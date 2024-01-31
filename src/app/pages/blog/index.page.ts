import { injectContentFiles } from '@analogjs/content';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostListComponent } from '../../components/post-list.component';
import PostAttributes from '../../models/post-attributes';

@Component({
  selector: 'jhd-blog-index',
  standalone: true,
  imports: [RouterLink, PostListComponent],
  template: ` <jhd-post-list /> `,
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
