import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {

  label = input.required<string>();

  variant = input<
    'primary'
    | 'secondary'
    | 'outline'
    | 'danger'
    | 'success'
  >('primary');

  size = input<'sm' | 'md' | 'lg'>('md');

  disabled = input(false);

  loading = input(false);

  type = input<'button' | 'submit'>('button');

  buttonClass = computed(() => {

    const variants = {

      primary:
        'bg-blue-600 hover:bg-blue-700 text-white',

      secondary:
        'bg-gray-600 hover:bg-gray-700 text-white',

      outline:
        'border border-blue-600 text-blue-600 hover:bg-blue-50',

      danger:
        'bg-red-600 hover:bg-red-700 text-white',

      success:
        'bg-green-600 text-white'

    };

    const sizes = {

      sm: 'px-3 py-2 text-sm',

      md: 'px-4 py-3',

      lg: 'px-6 py-4 text-lg'

    };

    return `
      ${variants[this.variant()]}
      ${sizes[this.size()]}
      rounded-xl
      transition
      duration-200
      font-semibold
      w-full
      disabled:opacity-50
      disabled:cursor-not-allowed
    `;

  });

}
