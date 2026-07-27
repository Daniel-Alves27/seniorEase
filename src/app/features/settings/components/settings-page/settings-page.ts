import { Component, inject } from '@angular/core';

import { SettingsHeaderComponent } from '../../components/settings-header/settings-header';
import { SettingsSectionComponent } from '../../components/settings-section/settings-section';
import { RadioOptionComponent } from "../radio-option/radio-option";
import { SettingsStore } from '../../../../core/store/settings.store';
import { SettingsService } from '../../../../core/services/settings.service';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [
    SettingsHeaderComponent,
    SettingsSectionComponent,
    RadioOptionComponent,
  ],
  templateUrl: './settings-page.html'
})
export class SettingsPage {

  private settingsService = inject(SettingsService);

  protected readonly settingsStore = inject(SettingsStore);
  protected readonly store = this.settingsStore;

  async changeFontSize(value: string) {

    await this.settingsService.saveSettings({
      ...this.settingsStore.settings(),
      fontSize: value as
        'small'
        | 'medium'
        | 'large'
    });
  }

  async changeContrast(enabled: boolean) {

    await this.settingsService.saveSettings({
      ...this.settingsStore.settings(),
      contrast: enabled
        ? 'high'
        : 'normal'

    });
  }

  async changeSpacing(value: string) {

    await this.settingsService.saveSettings({
      ...this.settingsStore.settings(),
      spacing: value as
        'normal'
        | 'large'

    });
  }

  async changeFeedback(enabled: boolean) {
    await this.settingsService.saveSettings({
      ...this.settingsStore.settings(),
      visualFeedback: enabled
    });
  }

  async changeConfirmation(enabled: boolean) {
    await this.settingsService.saveSettings({
      ...this.settingsStore.settings(),
      confirmations: enabled
    });
  }

  
}
