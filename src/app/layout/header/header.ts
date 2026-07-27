import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  private authService = inject(AuthService);
  private router = inject(Router);

  async logout() {
    await this.authService.logout();

    this.router.navigate(['/login']);
  }

}
