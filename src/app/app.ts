import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./features/auth/pages/login/login";
import { Register } from "./features/auth/pages/register/register";
import { TaskFormComponent } from './features/tasks/components/task-form/task-form';

import { AuthService } from './core/services/auth.service';
import { SnackbarComponent } from "./shared/components/snackbar/snackbar";
import { LoadingComponent } from "./shared/components/loading/loading";
import { AccessibilityService } from './core/services/accessibility.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskFormComponent, Login, Register, SnackbarComponent, LoadingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('seniorEase');
  private authService = inject(AuthService);
  private accessibility = inject(AccessibilityService);

  constructor(){
    this.authService.listenAuth()
  }
}
