import {
  Component,
  input,
  output
} from '@angular/core';

@Component({
  selector: 'app-action-card',
  standalone: true,
  templateUrl: './action-card.html',
  styleUrl: './action-card.css'
})
export class ActionCard {

  readonly icon = input.required<string>();
  readonly title = input.required<string>();
  readonly action = output<void>();

}
