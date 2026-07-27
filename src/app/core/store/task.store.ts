import {
  Injectable,
  computed,
  signal
} from '@angular/core';

import { Task } from '../models/task.model';
import { TaskFilter } from '../types/task-filter.type';
import { TaskSort } from '../types/task-sort.type';

@Injectable({
  providedIn: 'root'
})
export class TaskStore {

  /**
   * Lista de tarefas
   */
  readonly tasks = signal<Task[]>([]);

  readonly search = signal('');

  /**
   * Loading
   */
  readonly loading = signal(false);
  readonly filter = signal<TaskFilter>('all');
  readonly sort = signal<TaskSort>('date');

  readonly filteredTasks = computed(() => {

  let tasks = [...this.tasks()];

  // ---------- FILTRO ----------

  switch (this.filter()) {
    case 'pending':
      tasks = tasks.filter(task => !task.completed);
      break;

    case 'completed':
      tasks = tasks.filter(task => task.completed);
      break;

  }

  // ---------- BUSCA ----------

  const search = this.search().trim().toLowerCase();

  if (search) {

    tasks = tasks.filter(task =>

      task.title.toLowerCase().includes(search)

      ||

      task.description?.toLowerCase().includes(search)

      ||

      task.category.toLowerCase().includes(search)

    );

  }

  // ---------- ORDENAÇÃO ----------

  switch (this.sort()) {

    case 'title':

      tasks.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

      break;

    case 'priority':

      const priorityOrder = {

        high: 0,
        medium: 1,
        low: 2

      };

      tasks.sort(
        (a, b) =>
          priorityOrder[a.priority] -
          priorityOrder[b.priority]
      );

      break;

    case 'date':

      tasks.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() -
          new Date(b.createdAt).getTime()
      );
      break;
  }
  return tasks;
  });

  /**
   * Total de tarefas
   */
  readonly total = computed(() => this.tasks().length);

  /**
   * Tarefas concluídas
   */
  readonly completed = computed(() =>
    this.tasks().filter(task => task.completed)
  );

  /**
   * Quantidade concluída
   */
  readonly completedCount = computed(() =>
    this.completed().length
  );

  /**
   * Tarefas pendentes
   */
  readonly pending = computed(() =>
    this.tasks().filter(task => !task.completed)
  );

  /**
   * Quantidade pendente
   */
  readonly pendingCount = computed(() =>
    this.pending().length
  );

  // Barra de Progresso
  readonly progress = computed(() => {

    const total = this.total();

    if (total === 0) {
      return 0;
    }

    return Math.round(
      (this.completedCount() / total) * 100
    );

  });

  /**
   * Atualiza todas as tarefas
   */
  setTasks(tasks: Task[]) {
    this.tasks.set(tasks);
  }

  setSearch(value: string) {
    this.search.set(value);
  }

  setFilter(filter: TaskFilter){
    this.filter.set(filter);
  }

  setSort(sort: TaskSort) {
    this.sort.set(sort);
  }

  /**
   * Adiciona uma tarefa
   */
  addTask(task: Task) {
    this.tasks.update(tasks => [...tasks, task]);
  }

  /**
   * Atualiza uma tarefa
   */
  updateTask(task: Task) {

    this.tasks.update(tasks =>
      tasks.map(item =>
        item.id === task.id
          ? task
          : item
      )
    );

  }

  /**
   * Remove uma tarefa
   */
  removeTask(id: string) {

    this.tasks.update(tasks =>
      tasks.filter(task => task.id !== id)
    );

  }

  /**
   * Limpa tudo
   */
  clear() {
    this.tasks.set([]);
  }



}
