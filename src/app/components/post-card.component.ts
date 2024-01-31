import { ContentFile } from '@analogjs/content';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import PostAttributes from '../models/post-attributes';

@Component({
  selector: 'jhd-post-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a [routerLink]="'/blog/' + post.slug">
      <div class="card image-full bg-base-100">
        <figure>
          <img
            src="{{ post.attributes.coverImage }}"
            alt="{{ post.attributes.coverImageAlt }}" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ post.attributes.title }}</h2>
          <p>{{ post.attributes.description }}</p>
        </div>
      </div>
    </a>
  `,
})
export class PostCardComponent {
  @Input({ required: true }) post!: ContentFile<PostAttributes>;
}
