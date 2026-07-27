import { inject, Injectable } from '@angular/core';

import {
  Database,
  onValue,
  push,
  ref,
  set
} from '@angular/fire/database';

import { AuthStore } from '../store/auth.store';
import { HistoryStore } from '../store/history.store';

import {
  History,
  HistoryType
} from '../models/history.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private database = inject(Database);
  private authStore = inject(AuthStore);
  private historyStore = inject(HistoryStore);

  listenHistory() {

    const user = this.authStore.user();

    if (!user) return;

    const historyRef = ref(
      this.database,
      `history/${user.uid}`
    );

    onValue(historyRef, snapshot => {
      const value = snapshot.val();

      if (!value) {
        this.historyStore.clear();

        return;
      }

      const history =
        Object.values(value) as History[];

      history.sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt)
      );

      this.historyStore.setHistory(history);
    });
  }

  async add(
    type: HistoryType,
    title: string
  ) {

    const user = this.authStore.user();

    if (!user) return;

    const historyRef = ref(
      this.database,
      `history/${user.uid}`
    );

    const newHistory = push(historyRef);

    await set(newHistory, {
      id: newHistory.key,
      type,
      title,
      createdAt: new Date().toISOString()
    });
  }
}
