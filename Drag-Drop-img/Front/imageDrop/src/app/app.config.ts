import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    //when using any service with http you got to inject the http client module here
    provideHttpClient(),
    //if you wan to place an interceptor
    //withInterceptors([authInterceptor]),
  ],
};
