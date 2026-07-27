import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { TaskStore } from '../../../../core/store/task.store';
import { TaskService } from '../../../../core/services/task.service';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { TaskItemComponent } from '../../components/task-item/task-item';
import { DeleteTaskDialogComponent } from "../../components/delete-task-dialog/delete-task-dialog";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    ButtonComponent,
    TaskItemComponent,
    DeleteTaskDialogComponent
],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskListComponent {

  readonly taskStore = inject(TaskStore);
  private readonly taskService = inject(TaskService);
  private readonly router = inject(Router);

  selectedTaskId: string | null = null;
  dialogOpened = false;

  newTask() {
    this.router.navigate(['/tasks/new']);
  }

  async complete(id: string) {

    const task = this.taskStore.tasks()
      .find(item => item.id === id);

    if (!task) return;

    await this.taskService.updateTask({
      ...task,
      completed: true
    });

  }

  edit(id: string) {

    this.router.navigate(['/tasks', id, 'edit']);

  }

  remove(id: string){
    this.selectedTaskId = id;
    this.dialogOpened = true;
  }

  closeDialog(){
    this.dialogOpened = false;
    this.selectedTaskId = null;
  }

  async confirmDelete(){

    if(!this.selectedTaskId){
        return;
    }

    const task = this.taskStore.tasks()
      .find(item => item.id === this.selectedTaskId);

    if (!task) return;

    await this.taskService.deleteTask(task);

    this.closeDialog();
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
