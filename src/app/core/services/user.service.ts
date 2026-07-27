import { inject, Injectable } from '@angular/core';
import { Database, ref, set, get, update } from '@angular/fire/database';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private database = inject(Database);

  async create(user: User): Promise<void> {

    const userRef = ref(
      this.database,
      `users/${user.uid}`
    );

    await set(userRef, user);

  }

  async getById(uid: string): Promise<User | null> {

    const userRef = ref(
      this.database,
      `users/${uid}`
    );

    const snapshot = await get(userRef);

    if (!snapshot.exists()) {
      return null;
    }

    return snapshot.val() as User;

  }
  
  async update(uid: string, data: Partial<User>): Promise<void> {

    const userRef = ref(
      this.database,
      `users/${uid}`
    );

    await update(userRef, data);

  }

}
