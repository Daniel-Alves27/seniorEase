import {
  Component,
  input,
  output
} from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  templateUrl: './dialog.html',
  styleUrl: './dialog.css'
})
export class DialogComponent {
  opened = input(false);
  title = input('');
  closed = output<void>();
}
