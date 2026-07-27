import { Component } from '@angular/core';

import { ProfileCard } from '../../components/profile-card/profile-card';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    ProfileCard
  ],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css'
})
export class ProfilePage {

}
