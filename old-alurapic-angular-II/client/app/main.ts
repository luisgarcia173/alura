//Imports
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

//Boot initial module
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);