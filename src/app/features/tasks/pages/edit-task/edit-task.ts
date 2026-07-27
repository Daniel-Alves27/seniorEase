import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TaskStore } from '../../../../core/store/task.store';
import { TaskService } from '../../../../core/services/task.service';
import { Task } from '../../../../core/models/task.model';

import { TaskFormComponent } from '../../components/task-form/task-form';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './edit-task.html',
  styleUrl: './edit-task.css'
})
export class EditTaskComponent {

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly taskStore = inject(TaskStore);
  private readonly taskService = inject(TaskService);

  readonly task = computed(() => {

    const id = this.route.snapshot.paramMap.get('id');

    return this.taskStore.tasks()
      .find(task => task.id === id) ?? null;

  });

  async save(updatedTask: Omit<Task, 'id'>) {

    const currentTask = this.task();

    if (!currentTask) {
      return;
    }

    await this.taskService.updateTask({

      ...currentTask,

      ...updatedTask

    });

    this.router.navigate(['/tasks']);

  }

}
