import {
  ChangeDetectionStrategy,
  Component,
  input,
  computed
} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass]
})
export class CardComponent {

  title = input('');

  subtitle = input('');

  padding = input<'none' | 'sm' | 'md' | 'lg'>('md');

  shadow = input(true);

  variant = input<
    'default'
    | 'success'
    | 'warning'
    | 'danger'
  >('default');

  cardClass = computed(() => {

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };

    const variants = {
      default: 'bg-white',
      success: 'border-green-500 bg-green-50',
      warning: 'border-yellow-500 bg-yellow-50',
      danger: 'border-red-500 bg-red-50'
    };

    return `

            rounded-2xl
            border
            border-gray-200
            ${this.shadow() ? 'shadow-md' : ''}
            ${paddings[this.padding()]}
            ${variants[this.variant()]}
        `;

  });

  //className = input('');
}
