import {
  Component,
  forwardRef,
  input,
  signal,
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  label = input('');

  placeholder = input('');

  type = input<'date' | 'text' | 'email' | 'password'>('text');

  disabled = signal(false);

  error = input('');

  value = signal('');

  showPassword = signal(false);

  onChange = (_: string) => {};

  onTouched = () => {};

  writeValue(value: string): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled.set(disabled)
  }

  updateValue(event: Event) {

    const value = (event.target as HTMLInputElement).value;

    this.value.set(value);

    this.onChange(value);

    this.onTouched();

  }

  togglePassword() {
    this.showPassword.update(v => !v);
  }

}
