import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

import {
  provideDatabase,
  getDatabase
} from '@angular/fire/database';

import {
  provideAuth,
  getAuth
} from '@angular/fire/auth';

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { firebaseConfig } from '../app/core/firebase/firebase.config'
import { routes } from './app.routes';

import { LOCALE_ID } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideAuth(() => getAuth()),
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ]
};
