import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { ReminderService } from '../../../../core/services/reminder.service';

@Component({
  selector: 'app-reminders-card',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './reminders-card.html',
  styleUrl: './reminders-card.css'
})
export class RemindersCard {

  reminder = inject(ReminderService);
}
