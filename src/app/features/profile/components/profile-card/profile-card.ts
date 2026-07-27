import {
  Component,
  computed,
  inject
} from '@angular/core';

import { DatePipe } from '@angular/common';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { AuthStore } from '../../../../core/store/auth.store';

import { CardComponent } from '../../../../shared/components/card/card.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CardComponent,
    InputComponent,
    ButtonComponent,
    DatePipe
  ],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {

  private readonly router = inject(Router);
  private profileService = inject(ProfileService);
  private fb = inject(FormBuilder);
  authStore = inject(AuthStore);
  user = computed(() => this.authStore.user());

  form = this.fb.group({
    name: [
      this.user()?.name ?? '',
      Validators.required
    ],
    email: [
      {
        value: this.user()?.email ?? '',
        disabled: true
      }
    ]
  });

  async save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();

      return;
    }

    const { name } = this.form.getRawValue();
    await this.profileService.updateName(name!);
  }

  initial = computed(() => {
    const user = this.user();

    if (!user) return '?';

    return user.name.charAt(0).toUpperCase();
  });

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
