import { injectContentFiles } from '@analogjs/content';
import { Component } from '@angular/core';
import PostAttributes from '../models/post-attributes';
import { PostCardComponent } from './post-card.component';

@Component({
  selector: 'jhd-post-list',
  standalone: true,
  imports: [PostCardComponent],
  template: `
    @for (post of posts; track post) {
      <jhd-post-card [post]="post" />
    }
  `,
})
export class PostListComponent {
  readonly posts = injectContentFiles<PostAttributes>();
}
