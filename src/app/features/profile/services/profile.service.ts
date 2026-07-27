import { inject, Injectable } from '@angular/core';

import { Auth } from '@angular/fire/auth';
import { Database, ref, update } from '@angular/fire/database';

import { updateProfile } from 'firebase/auth';

import { AuthStore } from '../../../core/store/auth.store';
import { SnackbarStore } from '../../../core/store/snackbar.store';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private auth = inject(Auth);
  private database = inject(Database);

  private authStore = inject(AuthStore);
  private snackbar = inject(SnackbarStore);

  async updateName(name: string) {
    const user = this.auth.currentUser;
    if (!user) return;

    await updateProfile(user, {
      displayName: name
    });

    await update(
      ref(this.database, `users/${user.uid}`),
      {
        name
      }
    );

    const current = this.authStore.user();

    if (current) {
      this.authStore.setUser({
        ...current,
        name
      });
    }

    this.snackbar.show({
      type: 'success',
      message: 'Perfil atualizado com sucesso!'
    });
  }
}
