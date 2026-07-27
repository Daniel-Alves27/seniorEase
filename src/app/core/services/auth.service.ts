import { inject, Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';

import { AuthStore } from '../store/auth.store';
import { UserService } from './user.service';
import { onAuthStateChanged } from 'firebase/auth';
import { TaskService } from './task.service';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
  User
} from 'firebase/auth';

import { Observable } from 'rxjs';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authStore = inject(AuthStore);
  private auth = inject(Auth);
  private userService = inject(UserService);
  private taskService = inject(TaskService);
  private settingsService = inject(SettingsService);

  user$: Observable<User | null> = authState(this.auth);

  
  async register(
    name: string,
    email: string,
    password: string
  ) {

    const credential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );

    
    await updateProfile(credential.user, {
      displayName: name
    });

    this.authStore.setUser({
      uid: credential.user.uid,
      name,
      email,
      createdAt: new Date().toISOString()
    });

    return credential.user;
  }

  async login(
    email: string,
    password: string
  ) {

    const credential =
      await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      console.log('Login:', credential.user);

console.log('CurrentUser:', this.auth.currentUser);

    this.authStore.setUser({
      uid: credential.user.uid,
      name: credential.user.displayName ?? '',
      email: credential.user.email ?? '',
      createdAt: ''
    });

    return credential.user;
  }

  async forgotPassword(email: string) {

    await sendPasswordResetEmail(
      this.auth,
      email
    );

  }

  async logout() {

    await signOut(this.auth);

    this.authStore.clear();

  }

  getCurrentUser() {

    return this.auth.currentUser;
  }

  listenAuth() {

  this.authStore.setLoading(true);

  onAuthStateChanged(this.auth, async (firebaseUser) => {

    if (!firebaseUser) {

      this.authStore.clear();

      this.authStore.setLoading(false);

      return;

    }

    const user = await this.userService.getById(firebaseUser.uid);

    this.authStore.setUser(user);
    this.settingsService.listenSettings();
    this.taskService.listenTasks();
    this.authStore.setLoading(false);
  });

}
}
