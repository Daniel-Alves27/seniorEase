import { Injectable, computed, inject } from '@angular/core';

import { TaskStore } from '../store/task.store';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  private taskStore = inject(TaskStore);

  overdueTasks = computed(() => {

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return this.taskStore.tasks().filter(task => {

      if (task.completed) {
        return false;
      }

      if (!task.dueDate) {
        return false;
      }

      const due = new Date(task.dueDate);
      due.setHours(0, 0, 0, 0);

      return due < today;
    });
  });

  todayTasks = computed(() => {
    const today = new Date();

    return this.taskStore.tasks().filter(task => {

      if (task.completed || !task.dueDate) {
        return false;
      }

      return task.dueDate ===
        today.toISOString().split('T')[0];
    });
  });

  weekTasks = computed(() => {
    const today = new Date();
    const week = new Date();
    week.setDate(today.getDate() + 7);

    return this.taskStore.tasks().filter(task => {

      if (task.completed || !task.dueDate) {
        return false;
      }

      const due = new Date(task.dueDate);
      return due >= today && due <= week;
    });
  });

}
