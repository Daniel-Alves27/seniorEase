import { inject, Injectable } from '@angular/core';
import {
  Database,
  ref,
  push,
  set,
  update,
  remove,
  onValue
} from '@angular/fire/database';

import { AuthStore } from '../store/auth.store';
import { TaskStore } from '../store/task.store';
import { Task } from '../models/task.model';
import { LoadingStore } from '../store/loading.store';
import { SnackbarStore } from '../store/snackbar.store';
import { getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})


export class TaskService {

  private database = inject(Database);
  private authStore = inject(AuthStore);
  private taskStore = inject(TaskStore);
  private loading = inject(LoadingStore);
  private snackbar = inject(SnackbarStore);
  private auth = inject(Auth);
  private historyService = inject(HistoryService);

  listenTasks() {

    const user = this.authStore.user();

    if (!user) {
      return;
    }

    const tasksRef = ref(
      this.database,
      `tasks/${user.uid}`
    );

    onValue(tasksRef, snapshot => {

      const value = snapshot.val();

      if (!value) {
        this.taskStore.setTasks([]);

        return;
      }

      const tasks = Object.values(value) as Task[];
      this.taskStore.setTasks(tasks);

    });

  }

  async createTask(task: Omit<Task, 'id'>) {

    this.snackbar.show({
      type: 'success',
      message: 'Tarefa criada!'
    })

    const user = this.authStore.user();

    if (!user) return;

    const tasksRef = ref(
      this.database,
      `tasks/${user.uid}`
    );

    const newTask = push(tasksRef);

    console.log('Ref:', tasksRef.toString());

    try {

      await set(newTask, {
        id: newTask.key,
        ...task
      });

      await this.historyService.add(
        'create',
        `Criou a tarefa "${task.title}"`
      );

      console.log('Salvou com sucesso!');

    } catch (error) {

      console.error('Erro completo:', error);

    }

  }

  async updateTask(task: Task) {

    const user = this.authStore.user();

    if (!user) return;

    await update(
      ref(
        this.database,
        `tasks/${user.uid}/${task.id}`
      ),
      task
    );

    await this.historyService.add(
      'update',
      `Editou a tarefa "${task.title}"`
    );

  }

  async deleteTask(task: Task) {

    const user = this.authStore.user();

    if (!user) return;

    await remove(
      ref(
        this.database,
        `tasks/${user.uid}/${task.id}`
      )
    );

    await this.historyService.add(
      'delete',
      `Excluiu a tarefa "${task.title}"`
    );
  }

  async toggleCompleted(
    task: Task
  ): Promise<void> {

    const user = this.authStore.user();

    if (!user) return;

    await update(
      ref(
        this.database,
        `tasks/${user.uid}/${task.id}`
      ),
      { completed: !task.completed }
    );

    await this.historyService.add(
      'complete',
      `Concluiu a tarefa "${task.title}"`
    );

  }

}
