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
      <!--      <h1>Jason Hodges</h1>-->
      <p>Experienced Software Engineer | Frontend Focused | ♥️ Angular</p>
      <p class="w-full text-xs/loose md:w-1/2">
        With over a decade of experience in frontend engineering, I specialize
        in Angular and TypeScript, thriving on data and visualizations. I am
        passionate about process improvement and enjoy the challenges of
        problem-solving. Always eager to learn, I bring a dynamic and innovative
        approach to my work.
      </p>
    </section>
  `,
})
export default class HomeIndexPage {}
