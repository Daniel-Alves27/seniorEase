import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';

import { Register } from './features/auth/pages/register/register';
import { Login } from './features/auth/pages/login/login';
import { DashboardComponent } from './features/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login,
    //canActivate:[guestGuard]
  },
  {
    path: 'register',
    component: Register,
    //canActivate:[guestGuard]
  },


  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },

  {
    path: 'tasks',
    loadChildren: () =>
      import('./features/tasks/tasks.routes')
        .then(r => r.TASKS_ROUTES)
  },

  {
    path: 'settings',
    loadComponent: () =>
      import('./features/settings/pages/settings-page/settings-page')
        .then(m => m.SettingsPage)
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/pages/profile-page/profile-page')
        .then(c => c.ProfilePage)
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./features/history/pages/history-page/history-page')
        .then(c => c.HistoryPage)
  }
];
