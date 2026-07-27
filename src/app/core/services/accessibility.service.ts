import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable } from '@angular/core';

import { SettingsStore } from '../store/settings.store';

@Injectable({
  providedIn: 'root'
})
export class AccessibilityService {

  private document = inject(DOCUMENT);
  private settingsStore = inject(SettingsStore);

  constructor() {
    effect(() => {
      this.applySettings();
    });
  }

  private applySettings() {

    const body = this.document.body;

    body.classList.remove(
      'font-small',
      'font-medium',
      'font-large',

      'contrast-normal',
      'contrast-high',

      'spacing-normal',
      'spacing-large'
    );

    body.classList.add(
      `font-${this.settingsStore.fontSize()}`,
      `contrast-${this.settingsStore.contrast()}`,
      `spacing-${this.settingsStore.spacing()}`
    );
  }
}
