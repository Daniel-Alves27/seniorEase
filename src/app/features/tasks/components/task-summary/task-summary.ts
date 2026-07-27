import { Component, inject } from '@angular/core';

import { CardComponent } from '../../../../shared/components/card/card.component';
import { TaskStore } from '../../../../core/store/task.store';

@Component({
  selector: 'app-task-summary',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './task-summary.html',
  styleUrl: './task-summary.css'
})
export class TaskSummary {

  readonly taskStore = inject(TaskStore);

}
