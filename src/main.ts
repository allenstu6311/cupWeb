import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { appConfig } from './app/app.config';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
// import { appConfig } from './app/app.config';

// bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
