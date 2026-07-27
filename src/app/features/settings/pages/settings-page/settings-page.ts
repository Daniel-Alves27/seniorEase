import { Component, inject } from '@angular/core';

import { SettingsStore } from '../../../../core/store/settings.store';
import { SettingsService } from '../../../../core/services/settings.service';
import { Settings } from '../../../../core/models/settings.model';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent
  ],
  templateUrl: './settings-page.html',
  styleUrl: './settings-page.css'
})
export class SettingsPage {

  private settingsStore = inject(SettingsStore);
  private settingsService = inject(SettingsService);
  private readonly router = inject(Router);

  settings = this.settingsStore.settings;

  updateFontSize(
    fontSize: Settings['fontSize']
  ) {

    this.settingsService.saveSettings({
      ...this.settings(),
      fontSize
    });

  }

  updateContrast(
    contrast: Settings['contrast']
  ) {

    this.settingsService.saveSettings({
      ...this.settings(),
      contrast
    });
  }

  updateSpacing(
    spacing: Settings['spacing']
  ) {

    this.settingsService.saveSettings({
      ...this.settings(),
      spacing
    });
  }

  updateConfirmations(
    confirmations: boolean
  ) {

    this.settingsService.saveSettings({
      ...this.settings(),
      confirmations
    });
  }

  updateVisualFeedback(
    visualFeedback: boolean
  ) {

    this.settingsService.saveSettings({
      ...this.settings(),
      visualFeedback
    });
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
