import { Component, inject } from '@angular/core';

import { HistoryList } from '../../components/history-list/history-list';
import { HistoryService } from '../../../../core/services/history.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [
    HistoryList
  ],
  templateUrl: './history-page.html',
  styleUrl: './history-page.css'
})
export class HistoryPage {
  private historyService = inject(HistoryService);
  private readonly router = inject(Router);

  constructor() {
    this.historyService.listenHistory();
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
