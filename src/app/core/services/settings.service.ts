import { inject, Injectable } from '@angular/core';
import {
  Database,
  ref,
  set,
  onValue
} from '@angular/fire/database';

import { AuthStore } from '../store/auth.store';
import { SettingsStore } from '../store/settings.store';
import { Settings } from '../models/settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private database = inject(Database);
  private authStore = inject(AuthStore);
  private settingsStore = inject(SettingsStore);

  async saveSettings(
    settings: Settings
  ){

    const user = this.authStore.user();

    if (!user) return;

    await set(
      ref(
        this.database,
        `users/${user.uid}/settings`
      ),
    settings
  );

    this.settingsStore.setSettings(settings);
  }

  listenSettings() {

  const user = this.authStore.user();

  if (!user) return;

  const settingsRef = ref(
    this.database,
    `users/${user.uid}/settings`
  );

  onValue(settingsRef, snapshot => {
    const value = snapshot.val();

    if (!value) {
      this.createDefaultSettings();
      return;
    }
      this.settingsStore.setSettings(value);
    });
  }

  private async createDefaultSettings() {

  const settings: Settings = {
    fontSize: 'medium',
    contrast: 'normal',
    spacing: 'normal',
    navigationMode: 'simple',
    confirmations: true,
    visualFeedback: true
  };

    await this.saveSettings(settings);
  }
}
