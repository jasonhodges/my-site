import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';

import { inject } from '@vercel/analytics';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// import 'prismjs/components/prism-javascript';

inject();

bootstrapApplication(AppComponent, appConfig);
