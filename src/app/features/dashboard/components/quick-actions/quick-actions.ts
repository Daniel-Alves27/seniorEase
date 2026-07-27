import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { CardComponent } from '../../../../shared/components/card/card.component';
import { ActionCard } from '../action-card/action-card';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [
    CardComponent,
    ActionCard
  ],
  templateUrl: './quick-actions.html',
  styleUrl: './quick-actions.css'
})
export class QuickActions {

  private router = inject(Router);

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  goToTasks() {
    this.router.navigate(['/tasks']);
  }

  goToHistory() {
    this.router.navigate(['/history']);
  }
}
