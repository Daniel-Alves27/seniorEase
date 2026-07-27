import { Component, input } from '@angular/core';

import { History } from '../../../../core/models/history.model';

import { CardComponent } from '../../../../shared/components/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-history-item',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './history-item.html',
  styleUrl: './history-item.css'
})
export class HistoryItem {

  history = input.required<History>();

}
