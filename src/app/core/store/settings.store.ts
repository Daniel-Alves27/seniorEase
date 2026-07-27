import { Injectable, computed, signal } from '@angular/core';
import { Settings } from '../models/settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsStore {

  private settingsSignal = signal<Settings>({
    fontSize: 'medium',
    contrast: 'normal',
    spacing: 'normal',
    navigationMode: 'simple',
    confirmations: true,
    visualFeedback: true

  });

  settings = this.settingsSignal.asReadonly();

  fontSize = computed(() =>
    this.settingsSignal().fontSize
  );

  contrast = computed(() =>
    this.settingsSignal().contrast
  );

  spacing = computed(() =>
    this.settingsSignal().spacing
  );

  navigationMode = computed(() =>
    this.settingsSignal().navigationMode
  );

  confirmations = computed(() =>
    this.settingsSignal().confirmations
  );

  visualFeedback = computed(() =>
    this.settingsSignal().visualFeedback
  );

  setSettings(settings: Settings) {
    this.settingsSignal.set(settings);
  }

  update(partial: Partial<Settings>) {
    this.settingsSignal.update(current => ({
      ...current,
      ...partial
    }));
  }
}
