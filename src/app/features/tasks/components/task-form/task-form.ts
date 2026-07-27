import {
  Component,
  inject,
  input,
  output,
  effect
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormControl
} from '@angular/forms';

import { Task } from '../../../../core/models/task.model';

import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { Router } from '@angular/router';
import { DialogComponent } from "../../../../shared/components/dialog/dialog";

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    CardComponent,
    DialogComponent
],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskFormComponent {

  constructor() {
    effect(() => {

    const task = this.task();

    if (!task) {
      return;
    }

    this.form.patchValue({

      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      category: task.category,
      priority: task.priority

    });

    });
  }

  private fb = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly task = input<Task | null>(null);
  readonly save = output<Omit<Task, 'id'>>();
  readonly form = this.fb.group({
  title: new FormControl('', {
    nonNullable: true,
    validators: [Validators.required]
  }),

  description: new FormControl('', {
    nonNullable: true
  }),

  dueDate: new FormControl('', {
    nonNullable: true
  }),

  category: new FormControl<Task['category']>('personal', {
    nonNullable: true
  }),

  priority: new FormControl<Task['priority']>('medium', {
    nonNullable: true
  })
  });


  submit() {
  console.log('Submit');

  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  this.save.emit({
      ...this.form.getRawValue(),
      completed: false,
      createdAt: new Date().toISOString()
    });
  }

  closed() {
    this.router.navigate(['/tasks']);
  }

}
