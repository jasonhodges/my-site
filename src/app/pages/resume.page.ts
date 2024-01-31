import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { TimelineComponent } from '../components/ui/timeline.component';

export const routeMeta: RouteMeta = {
  title: 'Jason Hodges - Resume',
  meta: [{ name: 'description', content: 'Resume of Jason Hodges' }],
};
@Component({
  selector: 'jhd-resume-page',
  standalone: true,
  imports: [TimelineComponent],
  template: ` <jhd-timeline /> `,
})
export default class ResumePage {}
