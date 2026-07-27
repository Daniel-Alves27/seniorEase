import { Injectable, computed, inject } from '@angular/core';


import { TaskStore } from '../store/task.store';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private taskStore = inject(TaskStore);

  totalTasks = computed(() => {

    return this.taskStore.tasks().length;

  });

  completedTasks = computed(() => {
    return this.taskStore
      .tasks()
      .filter(task => task.completed)
      .length;
  });

  pendingTasks = computed(() => {
    return this.taskStore
      .tasks()
      .filter(task => !task.completed)
      .length;
  });

  completionRate = computed(() => {

    const total = this.totalTasks();

    if (!total) {
      return 0;
    }

    return Math.round(
      (this.completedTasks() / total) * 100
    );
  });

  tasksByPriority = computed(() => {
    const tasks = this.taskStore.tasks();

    return {
      high: tasks.filter(task => task.priority === 'high').length,
      medium: tasks.filter(task => task.priority === 'medium').length,
      low: tasks.filter(task => task.priority === 'low').length
    };
  });

  tasksByCategory = computed(() => {

    const tasks = this.taskStore.tasks();

    return [
      {
        icon: '/images/icons/heart.svg',
        label: 'Saúde',
        value: tasks.filter(t => t.category === 'health').length
      },
      {
        icon: '/images/icons/book-open.svg',
        label: 'Estudos',
        value: tasks.filter(t => t.category === 'study').length
      },
      {
        icon: '/images/icons/briefcase-business.svg',
        label: 'Trabalho',
        value: tasks.filter(t => t.category === 'work').length
      },
      {
        icon: '/images/icons/house-roof.svg',
        label: 'Pessoal',
        value: tasks.filter(t => t.category === 'personal').length
      }
    ];
  });

  maxCategoryValue = computed(() => {
    const values = this.tasksByCategory().map(c => c.value);
    return Math.max(...values, 1);
  });

  favoriteCategory = computed(() => {

    return this.tasksByCategory()
      .reduce((a, b) =>
        a.value > b.value ? a : b
      );
  });
}
