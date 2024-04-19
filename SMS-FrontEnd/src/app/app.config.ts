import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { routes } from './app.routes';
import { HeaderInterceptor } from './header.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
  ],
};
