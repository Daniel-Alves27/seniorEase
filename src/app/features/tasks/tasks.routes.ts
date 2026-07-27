import { Routes } from '@angular/router';

import { AddTaskComponent } from './pages/add-task/add-task';
import { EditTaskComponent } from './pages/edit-task/edit-task';

export const TASKS_ROUTES: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./pages/task-list/task-list')
        .then(c => c.TaskListComponent)
  },

  {
    path: 'new',
    component: AddTaskComponent
  },
  {
    path: ':id/edit',
    component: EditTaskComponent
  }

];
