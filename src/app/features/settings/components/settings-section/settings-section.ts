import { Component, input } from '@angular/core';
import { CardComponent } from "../../../../shared/components/card/card.component";

@Component({
  selector: 'app-settings-section',
  standalone: true,
  templateUrl: './settings-section.html',
  imports: [CardComponent]
})
export class SettingsSectionComponent {

  title = input.required<string>();
  description = input('');
}
