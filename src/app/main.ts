import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import  { LoginPage } from '../pages/login/login';

import 'rxjs/add/operator/take';

platformBrowserDynamic().bootstrapModule(AppModule);
