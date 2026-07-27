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

  readonly user = signal<User | null>(null);
  readonly loading = signal(true);
  readonly isAuthenticated = computed(() => {

    return this.user() !== null;

  });

  setUser(user: User | null) {

    this.user.set(user);

  }

  setLoading(value: boolean) {

    this.loading.set(value);

  }

  clear() {

    this.user.set(null);

  }

}
