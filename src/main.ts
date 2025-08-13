import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  ...appConfig, // mantém as configs anteriores
  providers: [
    ...(appConfig.providers || []), // mantém providers do appConfig
    provideRouter(routes) // adiciona as rotas
  ]
}).catch(err => console.error(err));