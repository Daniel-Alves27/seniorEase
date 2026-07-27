import { Component, input } from '@angular/core';

import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.css'
})
export class StatCard {
  title = input.required<string>();
  value = input.required<number | string>();
  icon = input.required<string>();
}
