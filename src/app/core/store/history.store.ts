import { Injectable, signal } from '@angular/core';
import { History } from '../models/history.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryStore {

  history = signal<History[]>([]);

  setHistory(history: History[]) {
    this.history.set(history);
  }

  add(history: History) {

    this.history.update(current => [
      history,
      ...current
    ]);
  }

  clear() {
    this.history.set([]);
  }
}
