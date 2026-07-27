import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import { CardComponent } from '../../../../shared/components/card/card.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

import { AuthService } from '../../../../core/services/auth.service';
import { UserService } from '../../../../core/services/user.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule,
    CardComponent,
    InputComponent,
    ButtonComponent],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
   private fb = inject(FormBuilder);

  private authService = inject(AuthService);

  private userService = inject(UserService);

  private router = inject(Router);

  loading = signal(false);

  errorMessage = signal('');

  registerForm = this.fb.group({

    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ]

  });

  async submit() {

    if (this.registerForm.invalid) {

      this.registerForm.markAllAsTouched();

      return;

    }

    try {

      this.loading.set(true);

      this.errorMessage.set('');

      const { name, email, password } =
        this.registerForm.getRawValue();

      const authUser =
        await this.authService.register(
          name!,
          email!,
          password!
        );

      await this.userService.create({

        uid: authUser.uid,

        name: name!,

        email: email!,

        createdAt: new Date().toISOString()

      });

      await this.router.navigate(['/dashboard']);

    } catch (error: any) {

      console.error(error);

      this.errorMessage.set(
        'Não foi possível criar sua conta.'
      );

    } finally {

      this.loading.set(false);

    }

  }

}
