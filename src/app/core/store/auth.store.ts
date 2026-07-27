import {
  Injectable,
  computed,
  signal
} from '@angular/core';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthStore {

  /**
   * Usuário logado
   */
  readonly user = signal<User | null>(null);

  /**
   * Loading da autenticação
   */
  readonly loading = signal(true);

  /**
   * Existe usuário logado?
   */
  readonly isAuthenticated = computed(() => {

    return this.user() !== null;

  });

  /**
   * Atualiza usuário
   */
  setUser(user: User | null) {

    this.user.set(user);

  }

  /**
   * Atualiza loading
   */
  setLoading(value: boolean) {

    this.loading.set(value);

  }

  /**
   * Limpa usuário
   */
  clear() {

    this.user.set(null);

  }

}
