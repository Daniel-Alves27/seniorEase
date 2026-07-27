import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { TaskService } from '../../../../core/services/task.service';
import { TaskFormComponent } from '../../components/task-form/task-form';
import { Task } from '../../../../core/models/task.model';
import { SnackbarStore } from '../../../../core/store/snackbar.store';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    TaskFormComponent
  ],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTaskComponent {

  private readonly taskService = inject(TaskService);
  private readonly router = inject(Router);
  private snackbar = inject(SnackbarStore);

  async save(task: Omit<Task, 'id'>) {

    try {
      await this.taskService.createTask(task);

       console.log('Chegou no AddTask');
        console.log(task);

      this.snackbar.show({
        type:'success',
        message:'Tarefa criada com sucesso!'
      });

      this.router.navigate(['/tasks']);

    } catch (error) {
      console.error(error);

      this.snackbar.show({
        type:'error',
        message:'Erro ao salvar tarefa.'
      });
    }
  }
}
