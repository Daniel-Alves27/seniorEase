import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-toggle-option',
  standalone: true,
  templateUrl: './toggle-option.html'
})
export class ToggleOptionComponent {
  
  label = input.required<string>();
  checked = input(false);
  changed = output<boolean>();
}
