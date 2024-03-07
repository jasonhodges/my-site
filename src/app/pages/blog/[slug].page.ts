import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';

import PostAttributes from '../../models/post-attributes';

// import 'prismjs/components/prism-javascript';

@Component({
  selector: 'jhd-blog-post',
  standalone: true,
  imports: [MarkdownComponent, AsyncPipe],
  host: {
    class: 'max-w-xl',
  },
  template: `
    @if (post$ | async; as post) {
      <article class="mx-auto max-w-3xl">
        <img class="post__image" [src]="post.attributes.coverImage" />
        <analog-markdown [content]="post.content" />
      </article>
    }
  `,
  styles: [
    `
      .post__image {
        max-height: 40vh;
      }
    `,
  ],
})
export default class BlogPostComponent {
  readonly post$ = injectContent<PostAttributes>({
    param: 'slug',
    subdirectory: 'posts',
  });
}
