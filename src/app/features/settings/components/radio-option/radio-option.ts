import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-radio-option',
  standalone: true,
  templateUrl: './radio-option.html'
})
export class RadioOptionComponent {
  label = input.required<string>();
  value = input.required<string>();
  currentValue = input.required<string>();
  changed = output<string>();
}
