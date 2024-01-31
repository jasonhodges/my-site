import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineEntry } from '../../models/timeline';

@Component({
  selector: 'jhd-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul
      class="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
      @for (point of timelineData; track $index) {
        @if (point.side === 'right') {
          <li>
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <div class="timeline-start mb-10 md:text-end">
              <time class="font-mono italic">{{ point.date }}</time>
              <div class="text-lg font-black">{{ point.company }}</div>
              <div class="text-sm">{{ point.title }}</div>
            </div>
            <hr />
          </li>
        } @else if (point.side === 'left') {
          <li>
            <hr />
            <div class="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <div class="timeline-end mb-10">
              <time class="font-mono italic">{{ point.date }}</time>
              <div class="text-lg font-black">{{ point.company }}</div>
              <div class="text-sm">{{ point.title }}</div>
            </div>
            <hr />
          </li>
        }
      }
    </ul>
  `,
})
export class TimelineComponent {
  // timelineData: TimelineEntry[] = data.default;
  timelineData: TimelineEntry[] = [
    {
      date: '09/2013',
      company: 'SIHO Insurance',
      side: 'left',
      title: 'Web Developer',
    },
    {
      date: '06/2016',
      company: 'ClickFox',
      side: 'right',
      title: 'Software Engineer',
    },
    {
      date: '07/2017',
      company: 'ClickFox',
      side: 'right',
      title: 'Senior UI Developer',
    },
    {
      date: '03/2018',
      company: 'Charter Communications',
      side: 'left',
      title: 'Senior Application Developer',
    },
    {
      date: '06/2019',
      company: 'Charter Communications',
      side: 'left',
      title: 'Principal Application Architect',
    },
    {
      date: '11/2020',
      company: 'Aprimo',
      side: 'right',
      title: 'Senior Software Engineer IV - Architecture Team',
    },
    {
      date: '2024',
      company: 'Your Great Company!',
      side: 'left',
      title: 'A challenging and exciting new role',
    },
  ];
}
