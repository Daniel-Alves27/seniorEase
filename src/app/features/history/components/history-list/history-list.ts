import { Component, inject } from '@angular/core';

import { HistoryStore } from '../../../../core/store/history.store';

import { HistoryItem } from '../history-item/history-item';

@Component({
  selector: 'app-history-list',
  standalone: true,
  imports: [
    HistoryItem
  ],
  templateUrl: './history-list.html',
  styleUrl: './history-list.css'
})
export class HistoryList {

  historyStore = inject(HistoryStore);
}
