import {
  Component,
  input,
  output
} from '@angular/core';

import { Task } from '../../../../core/models/task.model';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    CardComponent,
    ButtonComponent,
    NgClass
],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItemComponent {

  readonly task = input.required<Task>();

  readonly complete = output<void>();

  readonly edit = output<void>();

  readonly remove = output<void>();

}
