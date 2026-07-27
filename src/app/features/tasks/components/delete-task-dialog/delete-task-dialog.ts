import {
  Component,
  input,
  output
} from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { DialogComponent } from "../../../../shared/components/dialog/dialog";

@Component({
  selector: 'app-delete-task-dialog',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    DialogComponent
],
  templateUrl: './delete-task-dialog.html',
  styleUrl: './delete-task-dialog.css'
})
export class DeleteTaskDialogComponent {

  readonly opened = input(false);
  readonly cancel = output<void>();
  readonly confirm = output<void>();

}
