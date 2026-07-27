import { Component, computed, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CardComponent } from '../../../../shared/components/card/card.component';
import { AuthStore } from '../../../../core/store/auth.store';
import { Header } from "../../../../layout/header/header";

@Component({
  selector: 'app-welcome-card',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    CardComponent,
    Header
],
  templateUrl: './welcome-card.html',
  styleUrl: './welcome-card.css'
})
export class WelcomeCardComponent {

  private authStore = inject(AuthStore);

  readonly user = this.authStore.user;

  readonly today = new Date();

  readonly greeting = computed(() => {

    const hour = new Date().getHours();

    if (hour < 12) {
      return 'Bom dia';
    }

    if (hour < 18) {
      return 'Boa tarde';
    }

    return 'Boa noite';

  });

}
