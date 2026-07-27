import { computed, Injectable, signal } from '@angular/core';

import { Snackbar } from '../models/snackbar.model';

@Injectable({
  providedIn: 'root'
})
export class SnackbarStore {

  private readonly snackbar = signal<Snackbar | null>(null);

  readonly current = computed(() => this.snackbar());

  show(snackbar: Snackbar) {

    this.snackbar.set(snackbar);

    setTimeout(() => {
      this.hide();
    }, snackbar.duration ?? 3000);
  }

  hide() {
    this.snackbar.set(null);
  }
}
