import { Component, OnInit, inject } from '@angular/core';
import { ProfileService } from '../../core/services/profile-service';
import { AuthService } from '../../core/services/auth-service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit {

  private authService = inject(AuthService)
  private profileService = inject(ProfileService)

  ngOnInit() {
    this.profileService.getProfile().subscribe((res) => {
      console.log(res)
    })
  }

  logout() {
    this.authService.logout();
  }

}
